import Style from "./CryptoCardHeader.module.css";
import Icon from "../../UI/Icon/Icon";
import CryptoCardInfo from "../CryptoCardInfo/CryptoCardInfo";
import Symbol from "../../UI/Symbol/Symbol";

export default function CryptoCardHeader() {
  return (
    <div className={Style.CryptoCardHeader}>
      <Icon />
      <CryptoCardInfo />
      <Symbol />
    </div>
  );
}
