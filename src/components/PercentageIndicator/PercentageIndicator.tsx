import classNames from "classnames";
import Style from "./PercentageIndicator.module.css";

type SignType = "-" | "+" | "";

interface PercentageIndicatorProps {
  percentage: number;
}

export default function PercentageIndicator({
  percentage,
}: PercentageIndicatorProps) {

  const getSign = (): SignType => {
    if (percentage > 0) return "+";
    return "";
  };

  return (
    <div
      className={classNames(
        Style.PercentageIndicator,
        percentage > 0 ? Style.Green : percentage < 0 ? Style.Red : null
      )}
    >
      {getSign()}
      {`${percentage}%`}
    </div>
  );
}
