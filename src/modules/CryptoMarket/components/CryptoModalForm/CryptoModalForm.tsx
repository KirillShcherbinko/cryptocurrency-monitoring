import Style from './CryptoModalForm.module.css';
import { ICryptoParams } from "../../types";
import Counter from '../../../../components/Counter/Counter';
import { useState } from 'react';
import { MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from '../../../../constants';
import Select from '../../../../UI/Select/Select';
import { orderItems } from '../../constants/paramsConstants';

interface ICryptoMarketModalProps {
  onSubmit: (params: Partial<ICryptoParams>) => void 
}

export default function CryptoMarketModal({ onSubmit }: ICryptoMarketModalProps) {
  const [pageNumber, setPageNumber] = useState<number | ''>(1);

  return (
    <div className={Style.CryptoModalForm}>
      <Select items={Array.from(Object.values(orderItems))}/>
      <Counter 
        minValue={MIN_PAGE_NUMBER}
        maxValue={MAX_PAGE_NUMBER}
        initialValue={pageNumber}
        onChange={setPageNumber}
      />
      <button onClick={() => onSubmit}>Submit</button>
    </div>
  )
}