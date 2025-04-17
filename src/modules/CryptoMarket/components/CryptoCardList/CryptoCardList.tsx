import Style from "./CryptoCardList.module.css";
import DataProvider from "../../../../contexts/data/DataProvider";
import ModalProvider from "../../../../contexts/modal/ModalProvider";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoCardModal from "../CryptoCardModal/CryptoCardModal";

interface Identifiable {
  id: string | number;
}

interface CryptoCardListProps<T> {
  cards: T[];
}

export default function CryptoCardList<T extends Identifiable>({
  cards,
}: CryptoCardListProps<T>) {
  return (
    <ul className={Style.CryptoCardList}>
      {cards?.map((card, index) => (
        <div key={card.id ? card.id : index}>
          <DataProvider data={card}>
            <ModalProvider content={<CryptoCardModal />}>
              <CryptoCard />
            </ModalProvider>
          </DataProvider>
        </div>
      ))}
    </ul>
  );
}
