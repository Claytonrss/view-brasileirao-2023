import { useEffect, useState } from "react";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartProps, RoundData, TeamData } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip
);

interface BarChartProps {
  roundData: RoundData[];
  teamsData: TeamData[];
  keyValue: "saldo_gols" | "vitorias" | "derrotas" | "empates";
  legend: string;
}

const formatChartData = ({
  roundData,
  teamsData,
  keyValue,
  legend,
}: BarChartProps): ChartProps => {
  let goalsData: { label: string; goals: number; color: string }[] = [];

  roundData.forEach((item) => {
    const team = teamsData.find((team) => team.id === item.id_clube);
    if (team) {
      const existingTeam = goalsData.find((data) => data.label === team.label);
      if (existingTeam) {
        existingTeam.goals += item[keyValue];
      } else {
        goalsData.push({
          label: team.label,
          goals: item[keyValue],
          color: team.colors[0] || "#000000",
        });
      }
    }
  });

  goalsData.sort((a, b) => b.goals - a.goals);

  const labels = goalsData.map((item) => item.label);
  const data = goalsData.map((item) => item.goals);
  const backgroundColors = goalsData.map((item) => item.color);

  return {
    labels,
    datasets: [
      {
        label: legend,
        data,
        backgroundColor: backgroundColors,
        borderColor: "none",
        borderWidth: 1,
      },
    ],
  };
};

export const BarChart = ({
  roundData,
  teamsData,
  keyValue,
  legend,
}: BarChartProps) => {
  const [chartData, setChartData] = useState<ChartProps>({
    labels: [],
    datasets: [],
  });

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
    },
  };

  useEffect(() => {
    if (roundData && teamsData) {
      setChartData(formatChartData({roundData, teamsData, keyValue, legend}));
    }
  }, [keyValue, legend, roundData, teamsData]);

  return (
    <div className="chart-container" style={{height: "414px"}}>
      <Bar data={chartData} options={options} />
    </div>
  );
};
