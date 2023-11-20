import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <header>
        <h1 className="text-xl">Analise de dados Brasileirão 2023 (Rodada 1)</h1>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className="col-span-2 border-2 border-black-500 p-6">
            <h2>Distribuição de pontos</h2>
          </div>
          <div className="border-2 border-black-500 p-6">
            <h2>Saldo de Gols</h2>
          </div>
          <div className="border-2 border-black-500 p-6">Vitórias</div>
          <div className="border-2 border-black-500 p-6">Derrotas</div>
          <div className="border-2 border-black-500 p-6">Empates</div>
        </div>
      </header>
    </main>
  );
}
