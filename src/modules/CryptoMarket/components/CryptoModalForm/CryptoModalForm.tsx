import Style from "./CryptoModalForm.module.css";
import { CurrencyType, ICryptoParams, OrderType } from "../../types";
import Counter from "../../../../components/Counter/Counter";
import { useState } from "react";
import {
  currencyItems,
  orderItems,
  DEFAULT_VALUE,
  MAX_PAGE_NUMBER,
  MAX_PER_PAGE_VALUE,
  MIN_PAGE_NUMBER,
  MIN_PER_PAGE_VALUE,
  PER_PAGE_STEP,
  changeItems,
} from "../../constants/paramsConstants";
import Select from "../../../../UI/Select/Select";
import Slider from "../../../../UI/Slider/Slider";
import Radio from "../../../../UI/RadioForm/RadioForm";
import RadioForm from "../../../../UI/RadioForm/RadioForm";

interface ICryptoMarketModalProps {
  onSubmit: (params: Partial<ICryptoParams>) => void;
}

export default function CryptoMarketModal({
  onSubmit,
}: ICryptoMarketModalProps) {
  const [change, setChange] = useState<string>('asc');
  const [currency, setCurrency] = useState<CurrencyType>('usd');
  const [order, setOrder] = useState<OrderType>('market_cap');
  const [perPage, setPerPage] = useState<number>(DEFAULT_VALUE);
  const [pageNumber, setPageNumber] = useState<number | ''>(1);

  return (
    <div className={Style.CryptoModalForm}>
      <RadioForm items={changeItems} onChange={setChange} />
      <Select
        items={currencyItems as Record<CurrencyType, string>}
        onChange={setCurrency}
      />
      <Slider
        min={MIN_PER_PAGE_VALUE}
        max={MAX_PER_PAGE_VALUE}
        step={PER_PAGE_STEP}
        defaultValue={perPage}
        onChange={setPerPage}
      />
      <Counter
        minValue={MIN_PAGE_NUMBER}
        maxValue={MAX_PAGE_NUMBER}
        initialValue={pageNumber}
        onChange={setPageNumber}
      />
      <Select
        items={orderItems as Record<OrderType, string>}
        onChange={setOrder}
      />
      <button onClick={() => onSubmit}>Submit</button>
    </div>
  );
}
