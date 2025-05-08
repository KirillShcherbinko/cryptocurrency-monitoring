import Style from "./CryptoCardList.module.css";
import ModalProvider from "../../../../UI/Modal/ModalContext/ModalProvider";
import CryptoCard from "../CryptoCard/CryptoCard";
import List from "../../../../components/List/List";
import CryptoCardProvider from "../../contexts/CryptoCardContext/CryptoCardProvider";
import { useCryptoMarket } from "../../hooks/useCryptoMarket";

export default function CryptoCardList() {
  const { cryptoMarketState } = useCryptoMarket();
  const { cryptoFilteredData } = cryptoMarketState;

  return (
    <List
      items={cryptoFilteredData}
      className={Style.CryptoCardList}
      render={(cryptoCard) => (
        <CryptoCardProvider cryptoData={cryptoCard}>
          <ModalProvider>
            <CryptoCard />
          </ModalProvider>
        </CryptoCardProvider>
      )}
    />
  );
}
