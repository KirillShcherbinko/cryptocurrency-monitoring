import { PercentageColor, PercentageArrow } from "../types";

interface PercentageIndicatorProps {
  percentage: number;
}

export default function PercentageIndicator({percentage}: PercentageIndicatorProps) {
  const percentageColor: PercentageColor = percentage <= 0 ? '#A13D2F' : '#2FA15D';
  const percentageArrow: PercentageArrow = percentage <= 0 ? 'expenses' : 'income';

  return (
    <div>
      <img
        src={`../../../assets/${percentageArrow}/`}
        alt={`${percentageArrow} arrow`}
      />
      <p
        style ={{ color: percentageColor }}
      >
        {`${percentage}%`}
      </p>
    </div>
  )
}