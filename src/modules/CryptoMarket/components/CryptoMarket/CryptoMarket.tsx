import Style from "./CryptoMarket.module.css";
import Filter from "../../../../components/Filter/Filter";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import { ICryptoData, ICryptoParams } from "../../types";
import { useState } from "react";
import CryptoCardList from "../CryptoCardList/CryptoCardList";
import FilterProvider from "../../../../contexts/filter/FilterProvider";
import CryptoMarketModal from "../CryptoFormModal/CryptoFormModal";
import { initialState } from "../../constants/apiConstants";
import Pagination from "../../../../components/Pagination/Pagination";

export default function CryptoMarket() {
  const [cryptoParams, setCryptoParams] = useState<ICryptoParams>(initialState);

  const { data, isError, isLoading, error } = useCryptoCards(
    cryptoParams.currency,
    cryptoParams.perPage,
    cryptoParams.pageNumber,
    cryptoParams.order
  );

  const handleSubmit = (params: ICryptoParams) => {
    setCryptoParams(params);
  };

  const handlePagination = (pageNumber: number) => {
    setCryptoParams({
      ...cryptoParams,
      pageNumber,
    });
  };

  return (
    <div className={Style.CryptoMarket}>
      <FilterProvider
        items={data || []}
        filterKey={"name"}
        filterContent={
          <CryptoMarketModal
            initialParams={cryptoParams}
            onSubmit={handleSubmit}
          />
        }
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
      <Pagination
        pageNumber={cryptoParams.pageNumber}
        isData={!!data || isLoading}
        onSubmit={handlePagination}
      />
    </div>
  );
}
