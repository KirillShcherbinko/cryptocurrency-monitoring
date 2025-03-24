import SearchProvider from "../../../../contexts/search/SearchProvider";
import Input from "../../../../UI/Input/Input";
import { ICryptoParams } from "../../types";

interface ICryptoMarketModalProps {
  onSubmit: (params: Partial<ICryptoParams>) => void 
}

export default function CryptoMarketModal({ onSubmit }: ICryptoMarketModalProps) {
  
  return (
    <div>
      <SearchProvider type="number" placeholder="Введите номер страницы">
        <Input/>
      </SearchProvider>
      <button onClick={() => {}}></button>
    </div>
  )
}