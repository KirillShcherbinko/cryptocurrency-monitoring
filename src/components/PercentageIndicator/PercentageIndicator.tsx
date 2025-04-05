import Style from './PercentageIndicator.module.css';
import percentageExpensesArrowImage  from '../../assets/expenses.png'
import percentageIncomeArrowImage  from '../../assets/income.png'

type ColorType = '#A13D2F' | '#2FA15D' | '#AB9F9F';
type ArrowType = typeof  percentageIncomeArrowImage
                | typeof percentageExpensesArrowImage
                | '';

interface PercentageIndicatorProps {
  percentage: number;
}

export default function PercentageIndicator({ percentage }: PercentageIndicatorProps) {
  const getColor = (): ColorType => {
    if (percentage > 0) return '#2FA15D';
    if (percentage < 0) return '#A13D2F';
    return '#AB9F9F';
  };

  const getArrow = (): ArrowType => {
    if (percentage > 0) return percentageIncomeArrowImage;
    if (percentage < 0) return percentageExpensesArrowImage;
    return '';
  };

  return (
    <div className={Style.PercentageIndicator}>
      {getArrow() && <img src={getArrow()} alt="arrow" />}
      <p style={{ color: getColor() }}>{`${percentage}%`}</p>
    </div>
  );
}
