export type TeamData = {
    id: number;
    label: string;
    colors: (string | null)[];
    points: number;
    position: number;
    victories: number;
    goalsDifference: number;
  };
  
  export type RoundData = {
    id_clube: number;
    rodada: number;
    posicao: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    saldo_gols: number;
    pontos: number;
  };
  
  export type StripeStyleProps = {
    colors: (string | null)[];
  };
  
  export type ChartProps = {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }>;
  };
  