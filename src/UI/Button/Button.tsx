import Style from "./Button.module.css";

interface IButtonProps {
  name: string;
  onClick: () => void;
}

export default function Button({ name, onClick }: IButtonProps) {
  return (
    <button className={Style.Button} onClick={onClick}>
      {name}
    </button>
  );
}
