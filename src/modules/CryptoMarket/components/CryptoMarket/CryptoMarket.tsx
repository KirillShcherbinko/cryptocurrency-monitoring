import CryptoCardList from "../CryptoCardList/CryptoCardList";

export default function CryptoMarket() {
  return <CryptoCardList
    currency="usd"
    cryptoPerPage={4}
    pageNumber={1}
    order="market_cap_desc"
  />;
}
