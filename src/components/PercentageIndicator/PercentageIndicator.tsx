import Style from './PercentageIndicator.module.css';

type ColorType = '#A13D2F' | '#2FA15D' | '#AB9F9F';
type SignType = '-' | '+' | ''

interface PercentageIndicatorProps {
  percentage: number;
}

export default function PercentageIndicator({ percentage }: PercentageIndicatorProps) {
  const getColor = (): ColorType => {
    if (percentage > 0) return '#2FA15D';
    if (percentage < 0) return '#A13D2F';
    return '#AB9F9F';
  };

  const getSign = (): SignType => {
    if (percentage > 0) return '+';
    if (percentage < 0) return '-';
    return '';
  };

  return (
    <div className={Style.PercentageIndicator}>
      <p style={{ color: getColor() }}>{getSign()}{`${percentage}%`}</p>
    </div>
  );
}
