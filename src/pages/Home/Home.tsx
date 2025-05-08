import { CryptoChat } from "../../modules/CryptoChat";
import { CryptoMarket } from "../../modules/CryptoMarket";

export default function Home() {
  return (
    <>
      <CryptoMarket />
      <CryptoChat />
    </>
  );
}
