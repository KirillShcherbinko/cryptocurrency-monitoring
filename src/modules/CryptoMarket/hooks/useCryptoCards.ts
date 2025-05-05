import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchCryptoMarketData from "../api/fetchCryptoMarketData";
import { CryptoData } from "../types";

export const useCryptoCards = (
  currency: string,
  perPage: number,
  pageNumber: number,
  order: string
): UseQueryResult<CryptoData[]> => {
  // Кэшируем данные списка карточек
  const cards = useQuery<CryptoData[]>({
    queryKey: ["cards", currency, perPage, pageNumber, order],
    queryFn: () => fetchCryptoMarketData(currency, perPage, pageNumber, order),
    staleTime: 30000,
  });

  return cards;
};
