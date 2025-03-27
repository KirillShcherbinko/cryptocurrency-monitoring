import Style from "./CryptoMarket.module.css";
import Filter from "../../../../components/Filter/Filter";
import { useCryptoCryptoCards } from "../../hooks/useCryptoCards";
import { ICryptoData, ICryptoParams } from "../../types";
import { useReducer } from "react";
import cryptoParamsReducer from "../../reducers/cryptoParamsReducer";
import CryptoCardList from "../CryptoCardList/CryptoCardList";
import FilterProvider from "../../../../contexts/filter/FilterProvider";
import CryptoMarketModal from "../CryptoModalForm/CryptoModalForm";

export default function CryptoMarket() {
  const initialState: { params: ICryptoParams } = {
    params: {
      currency: "usd",
      cryptoPerPage: 12,
      pageNumber: 1,
      order: "market_cap_desc",
    },
  };

  const [cryptoParamsState, cryptoParamsDispatch] = useReducer(
    cryptoParamsReducer,
    initialState
  );

  const { data, isError, isLoading, error } = useCryptoCryptoCards(
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
    <div className={Style.CryptoMarket}>
      <FilterProvider
        items={data || []}
        filterKey={"name"}
        filterContent={<CryptoMarketModal onSubmit={handleSubmit} />}
      >
        <Filter
          render={function (filteredItems: ICryptoData[]) {
            if (isError) return <div>Loading error: {error.message}</div>;
            if (isLoading) return <div>Loading...</div>;
            if (!data || data.length === 0) return <div>No data</div>;
            return <CryptoCardList cards={filteredItems} />;
          }}
        />
      </FilterProvider>
    </div>
  );
}
