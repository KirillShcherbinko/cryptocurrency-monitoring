import Filter from "../../../../components/Filter/Filter";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import { ICryptoData, ICryptoParams } from "../../types";
import List from "../../../../components/List/List";
import Card from "../../../../components/Card/Card";
import SearchProvider from "../../../../contexts/search/SearchProvider";
import DataProvider from "../../../../contexts/data/DataProvider";
import CryptoMarketModal from "../CryptoMarketModal/CryptoMarketModal";
import { useReducer } from "react";
import cryptoParamsReducer from "../../reducers/cryptoParamsReducer";

export default function CryptoMarket() {

  const initialState: { params: ICryptoParams } = {
    params: {
      currency: 'usd',
      cryptoPerPage: 4,
      pageNumber: 1,
      order: 'market_cap_desc',
    }
  };

  const [cryptoParamsState, cryptoParamsDispatch] = useReducer(cryptoParamsReducer, initialState);

  const { data, isError, isLoading, error } = useCryptoCards(
    cryptoParamsState.params.currency,
    cryptoParamsState.params.cryptoPerPage,
    cryptoParamsState.params.pageNumber,
    cryptoParamsState.params.order
  ); 
  
  
  const handleSubmit = (params: Partial<ICryptoParams>) => {
    cryptoParamsDispatch({
      type: "updateParams",
      payload: params
    });
  };
  

  return (
    <SearchProvider>
      <Filter
        items={data || []}
        filterKey="name"
        render={function (filteredItems: ICryptoData[]) {
          if (isError) return <div>Loading error: {error.message}</div>;
          if (isLoading) return <div>Loading...</div>;
          if (!data || data.length === 0) return <div>No data</div>;
          return (
            <List
              items={filteredItems}
              render={(card) => <DataProvider data={card}>
                <Card key={card.id} />
              </DataProvider>}
            />
          );
        }}
      />
    </SearchProvider>
  );
}
