import { ReactNode, useCallback, useMemo } from "react";
import FilterProvider from "../../../../contexts/filter/FilterProvider";
import CryptoMarketModal from "../CryptoFormModal/CryptoFormModal";
import Filter from "../../../../components/Filter/Filter";
import { useCryptoMarket } from "../../hooks/useCryptoMarket";

interface CryptoFilerProps {
  children: ReactNode;
}

export default function CryptoFilter({ children }: CryptoFilerProps) {
  const { cryptoMarketState, dispatchCryptoMarket } = useCryptoMarket();
  const { cryptoData } = cryptoMarketState;

  const filterKey = "name";
  const modal = useMemo(() => <CryptoMarketModal />, []);

  const handleFilter = useCallback((value: string) => {
    dispatchCryptoMarket({
      type: "set_filtered_crypto_data",
      payload: { key: filterKey, value: value },
    });
  }, [dispatchCryptoMarket]);

  return (
    <div>
      <FilterProvider
        items={cryptoData}
        onFilter={handleFilter}
        filterKey={filterKey}
        filterContent={modal}
      >
        <Filter>{children}</Filter>
      </FilterProvider>
    </div>
  );
}
