import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fetchCryptoMarketData from "../api/fetchCryptoMarketData";
import { CryptoDataType } from "../types";

export const useCryptoCards = (
  currency: string,
  perPage: number,
  pageNumber: number,
  order: string
): UseQueryResult<CryptoDataType[]> => {
  return useQuery<CryptoDataType[], Error>({
    queryKey: ["cards", currency, perPage, pageNumber, order],
    queryFn: () => fetchCryptoMarketData(currency, perPage, pageNumber, order),
    staleTime: 60000,
  });
};
