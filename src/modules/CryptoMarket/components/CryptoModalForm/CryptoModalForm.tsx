import Style from './CryptoModalForm.module.css';
import { ICryptoParams } from "../../types";
import Counter from '../../../../components/Counter/Counter';
import { useState } from 'react';
import { MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from '../../../../constants';

interface ICryptoMarketModalProps {
  onSubmit: (params: Partial<ICryptoParams>) => void 
}

export default function CryptoMarketModal({ onSubmit }: ICryptoMarketModalProps) {
  const [pageNumber, setPageNumber] = useState<number | ''>('');

  return (
    <div className={Style.CryptoModalForm}>

      <Counter 
        minValue={MIN_PAGE_NUMBER}
        maxValue={MAX_PAGE_NUMBER}
        initialValue={pageNumber}
        onChange={setPageNumber}
      />
      <button onClick={() => onSubmit}></button>
    </div>
  )
}