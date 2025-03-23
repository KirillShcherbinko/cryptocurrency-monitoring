import Filter from "../../../../components/Filter/Filter";
import { useCryptoCards } from "../../hooks/useCryptoCards";
import { ICryptoData } from "../../types";
import List from "../CryptoCardList/List";
import Card from "../../../../components/Card/Card";
import SearchProvider from "../../../../contexts/search/SearchProvider";
import DataProvider from "../../../../contexts/data/DataProvider";

export default function CryptoMarket() {
  const currency = "usd";
  const cryptoPerPage = 4;
  const pageNumber = 1;
  const order = "market_cap_desk";

  const { data, isError, isLoading, error } = useCryptoCards(
    currency,
    cryptoPerPage,
    pageNumber,
    order
  );

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
