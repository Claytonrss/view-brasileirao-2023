import { TeamData } from "@/types";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { createDiagonalStripes } from "@/utils";

type PointsChartProps = {
  teamsData: TeamData[];
  maxPoints: number;
};

export const PointsChart = ({ teamsData, maxPoints }: PointsChartProps) => {
  const [parent] = useAutoAnimate();

  return (
    <div
      className="flex flex-col items-start mt-10 h-[1000px]"
      ref={parent}
      style={{ overflowAnchor: "none" }}
    >
      {teamsData.map((team) => (
        <div key={team.id} className="w-full m-0">
          <span>{`${team.label}: ${team.points} pontos`}</span>
          <div className="flex flex-row-reverse justify-end items-center gap-1">
            <Image
              src={`/img/clubes/${team.id}.png`}
              alt={team.label}
              width={25}
              height={25}
            />
            <div
              className="p-2.5 my-0.5 rounded border border-gray-800 transition-all"
              style={{
                width: `calc(${(team.points / maxPoints) * 100}% - 40px)`,
                order: team.position,
                ...createDiagonalStripes({
                  colors: team.colors,
                }),
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
