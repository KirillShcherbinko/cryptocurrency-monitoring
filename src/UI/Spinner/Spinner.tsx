import Style from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={Style.SpinnerContainer}>
      <div className={Style.Spinner} />
    </div>
  );
}