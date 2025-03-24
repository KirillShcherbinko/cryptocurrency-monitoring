import Style from "./Card.module.css";
import PercentageIndicator from "../PercentageIndicator/PercentageIndicator";
import Icon from "../../UI/Icon/Icon";
import { useData } from "../../hooks/useData";
import Modal from "../../UI/Modal/Modal";
import { useModal } from "../../hooks/useModal";

export default function Card() {
  const data = useData<{name: string, symbol: string, current_price: number, price_change_percentage_24h: number}>();
  const { openModal } = useModal();

  if (!data) return null;
  return (
      <div className={Style.Card} onClick={openModal}>
        <h1>{data.name}</h1>
        <p>{data.symbol}</p>
        <Icon />
        <p>
          {data.current_price}
        </p>
        <PercentageIndicator percentage={data.price_change_percentage_24h} />
        <Modal>something</Modal>
      </div>
  );
}
