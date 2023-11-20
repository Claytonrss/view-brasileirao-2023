"use client";
import { BarChart } from "@/components/BarChart";
import { Footer } from "@/components/Footer";
import { PointsChart } from "@/components/PointsChart";
import { useBrazilianTeamsRanking } from "@/hooks/useBrazilianTeamsRanking";

export default function Home() {
  const { teamData, dataCurrentRound, currentRound, maxPoints } =
    useBrazilianTeamsRanking();

  return (
    <>
      <main className="flex min-h-screen flex-col p-8 md:p-12">
        <header>
          <h1 className="text-2xl">Visualização de dados do Brasileirão 2023 até a rodada 34</h1>
          <h2 className="text-xl mt-6">Rodada {currentRound}</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 shadow-md">
          <div className="md:col-span-2 border-2 border-black-500 p-6">
            <h3 className="mb-4 text-xl">Distribuição de pontos ({currentRound})</h3>
            <PointsChart teamsData={teamData} maxPoints={maxPoints} />
          </div>
          <div className="border-2 border-black-500 p-6 shadow-md">
            <h3 className="mb-6 text-xl">Saldo de Gols ({currentRound})</h3>
            <BarChart
              roundData={dataCurrentRound}
              teamsData={teamData}
              keyValue="vitorias"
              legend="Vitórias"
            />
          </div>
          <div className="border-2 border-black-500 p-6 shadow-md">
            <h3 className="mb-6 text-xl">Vitórias ({currentRound})</h3>
            <BarChart
              roundData={dataCurrentRound}
              teamsData={teamData}
              keyValue="vitorias"
              legend="Vitórias"
            />
          </div>
          <div className="border-2 border-black-500 p-6 shadow-md">
            <h3 className="mb-6 text-xl">Derrotas ({currentRound})</h3>
            <BarChart
              roundData={dataCurrentRound}
              teamsData={teamData}
              keyValue="derrotas"
              legend="Derrotas"
            />
          </div>
          <div className="border-2 border-black-500 p-6 shadow-md">
            <h3 className="mb-6 text-xl">Empates ({currentRound})</h3>
            <BarChart
              roundData={dataCurrentRound}
              teamsData={teamData}
              keyValue="empates"
              legend="Empates"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
