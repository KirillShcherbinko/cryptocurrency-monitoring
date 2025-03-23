import Style from './PercentageIndicator.module.css';
import { PercentageColor } from "../types";
import percentageExpensesArrowImage  from '../../assets/expenses.png'
import percentageIncomeArrowImage  from '../../assets/income.png'


interface PercentageIndicatorProps {
  percentage: number;
}

export default function PercentageIndicator({percentage}: PercentageIndicatorProps) {

  const percentageColor: PercentageColor = percentage <= 0 ? '#A13D2F' : '#2FA15D';
  const percentageArrow = percentage <= 0 ? percentageExpensesArrowImage : percentageIncomeArrowImage;

  return (
    <div className={Style.PercentageIndicator}>
      <img
        src={percentageArrow}
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