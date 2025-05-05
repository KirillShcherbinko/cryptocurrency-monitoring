import Style from "./CryptoCardList.module.css";
import DataProvider from "../../../../contexts/data/DataProvider";
import ModalProvider from "../../../../contexts/modal/ModalProvider";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoCardModal from "../CryptoCardModal/CryptoCardModal";
import { CryptoData } from "../../types";
import List from "../../../../components/List/List";
import { CurrencySymbolType } from "../../../../types";

interface CryptoCardListProps {
  currensySymbol: CurrencySymbolType;
  cards: CryptoData[];
}

export default function CryptoCardList({
  cards,
  currensySymbol,
}: CryptoCardListProps) {
  return (
    <List
      items={cards}
      className={Style.CryptoCardList}
      render={(card) => (
        <DataProvider data={{ card, currensySymbol }}>
          <ModalProvider content={<CryptoCardModal />}>
            <CryptoCard />
          </ModalProvider>
        </DataProvider>
      )}
    />
  );
}
