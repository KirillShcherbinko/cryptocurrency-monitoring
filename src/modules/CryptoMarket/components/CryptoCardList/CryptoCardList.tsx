import Style from "./CryptoCardList.module.css";
import ModalProvider from "../../../../contexts/modal/ModalProvider";
import CryptoCard from "../CryptoCard/CryptoCard";
import List from "../../../../components/List/List";
import CryptoCardProvider from "../../contexts/CryptoCardContext/CryptoCardProvider";
import { useCryptoMarket } from "../../hooks/useCryptoMarket";

export default function CryptoCardList() {
  const { cryptoMarketState } = useCryptoMarket();
  const { cryptoFilteredData } = cryptoMarketState;

  console.log(cryptoFilteredData);

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
