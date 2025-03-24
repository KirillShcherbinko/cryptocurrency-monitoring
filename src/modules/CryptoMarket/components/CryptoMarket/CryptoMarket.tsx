import CryptoFilter from "../CryptoFilter/CryptoFilter";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import { ICryptoData, ICryptoParams } from "../../types";
import List from "../../../../components/List/List";
import Card from "../../../../components/Card/Card";
import SearchProvider from "../../../../contexts/search/SearchProvider";
import DataProvider from "../../../../contexts/data/DataProvider";
import { useReducer } from "react";
import cryptoParamsReducer from "../../reducers/cryptoParamsReducer";
import ModalProvider from "../../../../contexts/modal/ModalProvider";

export default function CryptoMarket() {
  const initialState: { params: ICryptoParams } = {
    params: {
      currency: "usd",
      cryptoPerPage: 4,
      pageNumber: 1,
      order: "market_cap_desc",
    },
  };

  const [cryptoParamsState, cryptoParamsDispatch] = useReducer(
    cryptoParamsReducer,
    initialState
  );

  const { data, isError, isLoading, error } = useCryptoCards(
    cryptoParamsState.params.currency,
    cryptoParamsState.params.cryptoPerPage,
    cryptoParamsState.params.pageNumber,
    cryptoParamsState.params.order
  );

  const handleSubmit = (params: Partial<ICryptoParams>) => {
    cryptoParamsDispatch({
      type: "updateParams",
      payload: params,
    });
  };

  return (
    <SearchProvider type="text" placeholder="Поиск 🔎">
      <ModalProvider>
        <CryptoFilter
          items={data || []}
          filterKey="name"
          onSubmit={handleSubmit}
          render={function (filteredItems: ICryptoData[]) {
            isError && <div>Loading error: {error.message}</div>;
            isLoading && <div>Loading...</div>;
            (!data || data.length === 0) && <div>No data</div>;
            return (
              <List
                items={filteredItems}
                render={(card) => (
                  <DataProvider data={card}>
                    <ModalProvider>
                      <Card key={card.id} />
                    </ModalProvider>
                  </DataProvider>
                )}
              />
            );
          }}
        />
      </ModalProvider>
    </SearchProvider>
  );
}
