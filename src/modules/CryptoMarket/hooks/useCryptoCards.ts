import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchCryptoMarketData from "../api/fetchCryptoMarketData";
import { ICryptoData } from "../types";

export const useCryptoCards = (
  currency: string,
  cryptoPerPage: number,
  pageNumber: number,
  order: string
): UseQueryResult<ICryptoData[]> => {
  // Кэшируем данные списка карточек
  const cards = useQuery<ICryptoData[]>({
    queryKey: ["cards", currency, cryptoPerPage, pageNumber, order],
    queryFn: () =>
      fetchCryptoMarketData(currency, cryptoPerPage, pageNumber, order),
    staleTime: 30000,
  });

  return cards;
};
