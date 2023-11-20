import { StripeStyleProps } from "@/types";

export const createDiagonalStripes = ({ colors }: StripeStyleProps) => {
  let backgroundColorStr: string;
  let backgroundSizeStr: string;

  const validColors = colors.filter((color) => color !== null) as string[];

  switch (validColors.length) {
    case 1:
      backgroundColorStr = `${validColors[0]}`;
      backgroundSizeStr = "50px";
      break;
    case 2:
      backgroundColorStr = `linear-gradient(45deg, ${validColors[0]} 25%, ${validColors[1]} 25%, ${validColors[1]} 50%, ${validColors[0]} 50%, ${validColors[0]} 75%, ${validColors[1]} 75%, ${validColors[1]})`;
      backgroundSizeStr = "60px 60px";
      break;
    case 3:
      backgroundColorStr = `linear-gradient(45deg, ${validColors[0]} 20%, ${validColors[1]} 20%, ${validColors[1]} 40%, ${validColors[2]} 40%, ${validColors[2]} 60%, ${validColors[0]} 60%, ${validColors[0]} 80%, ${validColors[1]} 80%, ${validColors[1]})`;
      backgroundSizeStr = "84px 53px";
      break;
    default:
      throw new Error("Por favor, forneça de 1 a 3 cores.");
  }

  return {
    background: backgroundColorStr,
    backgroundSize: backgroundSizeStr,
  };
};
