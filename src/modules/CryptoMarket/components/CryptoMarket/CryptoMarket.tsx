import Style from "./CryptoMarket.module.css";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import { CryptoParamsType } from "../../types";
import CryptoCardList from "../CryptoCardList/CryptoCardList";
import { initialParams } from "../../constants";
import Pagination from "../../../../components/Pagination/Pagination";
import ErrorScreen from "../../../../components/ErrorScreen/ErrorScreen";
import NotFoundScreen from "../../../../assets/not-found-screen.png";
import NetworkErrorScreen from "../../../../assets/network-error-screen.png";
import Spinner from "../../../../UI/Spinner/Spinner";
import CryptoFilter from "../CryptoFilter/CryptoFilter";
import CryptoMarketProvider from "../../contexts/CryptoMarketContext/CryptoMarketProvider";
import { useCryptoMarket } from "../../hooks/useCryptoMarket";
import { useLayoutEffect } from "react";

function CryptoMarketInner() {
  const { cryptoMarketState, dispatchCryptoMarket } = useCryptoMarket();
  const { cryptoParams } = cryptoMarketState;

  const { data, isError, isLoading, isFetching, refetch } = useCryptoCards(
    cryptoParams.currency,
    cryptoParams.perPage,
    cryptoParams.pageNumber,
    cryptoParams.order
  );

  useLayoutEffect(() => {
    if (data) dispatchCryptoMarket({ type: "set_crypto_data", payload: data });
  }, [data, dispatchCryptoMarket]);

  const handleSubmit = (params: CryptoParamsType) => {
    dispatchCryptoMarket({ type: "set_crypto_params", payload: params });
  };

  const handlePagination = (pageNumber: number) => {
    dispatchCryptoMarket({
      type: "set_crypto_params",
      payload: { ...cryptoParams, pageNumber },
    });
  };

  return (
    <div className={Style.CryptoMarket}>
      <CryptoFilter>
        {isError ? (
          <ErrorScreen
            title="Network Error"
            description="Whoops... network error. Try again later"
            image={NetworkErrorScreen}
            buttonText="Retry"
            onClick={refetch}
          />
        ) : isLoading || isFetching ? (
          <Spinner />
        ) : !data || !data.length ? (
          <ErrorScreen
            title="Result Not Found"
            description="Whoops ... this information is not available for a moment"
            image={NotFoundScreen}
            buttonText="Go back"
            onClick={() => handleSubmit(initialParams)}
          />
        ) : (
          <CryptoCardList />
        )}
      </CryptoFilter>
      <Pagination
        pageNumber={cryptoParams.pageNumber}
        isData={!!data && !!data.length}
        onSubmit={handlePagination}
      />
    </div>
  );
}

export default function CryptoMarket() {
  return (
    <CryptoMarketProvider>
      <CryptoMarketInner />
    </CryptoMarketProvider>
  );
}
