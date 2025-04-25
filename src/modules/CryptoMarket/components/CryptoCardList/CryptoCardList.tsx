import Style from "./CryptoCardList.module.css";
import DataProvider from "../../../../contexts/data/DataProvider";
import ModalProvider from "../../../../contexts/modal/ModalProvider";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoCardModal from "../CryptoCardModal/CryptoCardModal";
import { ICryptoData } from "../../types";
import List from "../../../../components/List/List";

interface CryptoCardListProps {
  cards: ICryptoData[];
}

export default function CryptoCardList({ cards }: CryptoCardListProps) {
  return (
    <List
      items={cards}
      className={Style.CryptoCardList}
      render={(card) => (
        <DataProvider data={card}>
          <ModalProvider content={<CryptoCardModal />}>
            <CryptoCard />
          </ModalProvider>
        </DataProvider>
      )}
    />
  );
}
