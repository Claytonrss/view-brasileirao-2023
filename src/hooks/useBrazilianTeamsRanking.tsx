import teams from "@/data/clubs.json";
import roundsData from "@/data/rounds.json";
import { RoundData, TeamData } from "@/types";
import { useEffect, useState } from "react";

const VELOCITY = 1000;

export const useBrazilianTeamsRanking = () => {
  const [teamData, setTeamData] = useState<TeamData[]>([]);
  const [dataCurrentRound, setDataCurrentRound] = useState<RoundData[]>([]);
  const [currentRound, setCurrentRound] = useState(1);
  const maxRound = Math.max(...roundsData.map((round) => round.rodada));
  const maxPoints = Math.max(...roundsData.map((round) => round.pontos));

  const sortTeams = (a:TeamData, b:TeamData) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    } else if (b.goalsDifference !== a.goalsDifference) {
      return b.goalsDifference - a.goalsDifference;
    } else {
      return b.victories - a.victories;
    }
  }

  // Atualiza a rodada atual
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentRound >= maxRound) {
        clearInterval(interval);
      } else {
        setCurrentRound(currentRound + 1);
      }
    }, VELOCITY);

    return () => clearInterval(interval);
  }, [currentRound, maxRound]);

  // Atualiza os dados da rodada atual
  useEffect(() => {
    setDataCurrentRound(roundsData.filter((item) => item.rodada === currentRound));
  }, [currentRound]);

  // Atualiza os dados dos times
  useEffect(() => {
    const updatedTeamData: TeamData[] = teams.map((team) => {
      const teamRoundData = dataCurrentRound.find((item) => item.id_clube === team.id);
      return {
        id: team.id,
        label: team.nome,
        colors: [team.cor1, team.cor2, team.cor3],
        points: teamRoundData?.pontos || 0,
        victories: teamRoundData?.vitorias || 0,
        goalsDifference: teamRoundData?.saldo_gols || 0,
        position: team.id,
      };
    }).sort(sortTeams)
      .map((team, index) => ({ ...team, order: index + 1 }));

    setTeamData(updatedTeamData);
  }, [dataCurrentRound]);

  return { teamData, dataCurrentRound, currentRound, maxPoints };
};