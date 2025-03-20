import { useQuery } from "@tanstack/react-query";
import { ICryptoData } from "../../../../components/types";
import fetchCryptoMarketData from "../../api/fetchCryptoMarketData";
import CryptoCard from "../../../../components/CryptoCard/CryptoCard";

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
  const { data, isError, isLoading, error} = useQuery({
    queryKey: ['cards', currency, cryptoPerPage, pageNumber, order],
    queryFn: () => fetchCryptoMarketData(currency, cryptoPerPage, pageNumber, order),
  });

  if (isError) {
    return <div>Loading error: {error.message}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data || data.length === 0) {
    return <div>No data</div>
  }

  return (
    <div>
      {data.map((item: ICryptoData) => (
        <CryptoCard 
          key={item.id}
          data={item}
          onClick={() => {alert('Modal is open')}}
        />
      ))}
    </div>
  )
}
