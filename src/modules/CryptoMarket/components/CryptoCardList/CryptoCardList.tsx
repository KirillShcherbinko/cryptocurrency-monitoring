import Style from "./CryptoCardList.module.css";
import { ICryptoData } from '../../types';
import CryptoCard from "../CryptoCard/CryptoCard";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import DataProvider from "../../../../contexts/data/DataProvider";

interface ICryptoCardListProps {
  currency: string;
  cryptoPerPage: number;
  pageNumber: number;
  order: string;
}

export default function CryptoCardList({
  currency,
  cryptoPerPage,
  pageNumber,
  order,
}: ICryptoCardListProps) {
  const { data, isError, isLoading, error } = useCryptoCards(currency, cryptoPerPage, pageNumber, order);

  // Обработка полученных данных
  if (isError) return <div>Loading error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data || data.length === 0) return <div>No data</div>;

  return (
    <div className={Style.CryptoCardList}>
      {data.map((data: ICryptoData) => (
        <DataProvider
          key={data.id}
          data={data as ICryptoData}
        >
          <CryptoCard/>
        </DataProvider>
      ))}
    </div>
  );
}
