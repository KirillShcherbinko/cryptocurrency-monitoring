import { ICryptoParams } from "../../types";

interface ICryptoMarketModalProps {
  onSubmit: (params: Partial<ICryptoParams>) => void 
}

export default function CryptoMarketModal({ onSubmit }: ICryptoMarketModalProps) {
  return <button onClick={() => {}}></button>
}