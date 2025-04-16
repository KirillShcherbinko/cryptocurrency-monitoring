import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchCryptoMarketData from "../api/fetchCryptoMarketData";
import { ICryptoData } from "../types";

export const useCryptoCards = (
  currency: string,
  perPage: number,
  pageNumber: number,
  order: string
): UseQueryResult<ICryptoData[]> => {
  // Кэшируем данные списка карточек
  const cards = useQuery<ICryptoData[]>({
    queryKey: ["cards", currency, perPage, pageNumber, order],
    queryFn: () =>
      fetchCryptoMarketData(currency, perPage, pageNumber, order),
    staleTime: 30000,
  });

  return cards;
};
