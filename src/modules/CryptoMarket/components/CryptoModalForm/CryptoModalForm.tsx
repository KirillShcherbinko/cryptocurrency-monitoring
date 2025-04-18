import Style from "./CryptoModalForm.module.css";
import { ChangeType, CurrencyType, ICryptoParams, OrderType } from "../../types";
import Counter from "../../../../components/Counter/Counter";
import { useState } from "react";
import {
  currencyItems,
  orderItems,
  MAX_PAGE_NUMBER,
  MAX_PER_PAGE_VALUE,
  MIN_PAGE_NUMBER,
  MIN_PER_PAGE_VALUE,
  PER_PAGE_STEP,
  changeItems,
} from "../../constants/paramsConstants";
import Select from "../../../../UI/Select/Select";
import Slider from "../../../../UI/Slider/Slider";
import RadioForm from "../../../../UI/RadioForm/RadioForm";
import Title from "../../../../UI/Title/Title";
import Button from "../../../../UI/Button/Button";
import { initialState } from "../../constants/apiConstants";
import { useModal } from "../../../../hooks/useModal";

interface ICryptoMarketModalProps {
  initialParams: ICryptoParams;
  onSubmit: (params: ICryptoParams) => void;
}

export default function CryptoMarketModal({
  initialParams,
  onSubmit,
}: ICryptoMarketModalProps) {
  const { closeModal } = useModal();

  const splitedOrder = initialParams.order.split('_');

  const initialChange: ChangeType = splitedOrder[splitedOrder.length - 1] as ChangeType;
  const initialOrder: OrderType = splitedOrder
    .slice(0, splitedOrder.length - 1)
    .join('_') as OrderType;

  const [change, setChange] = useState<ChangeType>(initialChange);
  const [order, setOrder] = useState<OrderType>(initialOrder);
  const [currency, setCurrency] = useState<CurrencyType>(initialParams.currency);
  const [perPage, setPerPage] = useState<number>(initialParams.perPage);
  const [pageNumber, setPageNumber] = useState<number | ''>(initialParams.pageNumber);

  const isSubmitDisabled = pageNumber === '';

  return (
    <div className={Style.CryptoModalForm}>
      <div className={Style.CryptoModalSection}>
        <Title>Sort by</Title>
        <RadioForm
          items={changeItems as Record<ChangeType, string>}
          defaultValue={change}
          onChange={setChange}
        />
        <Select
          items={orderItems as Record<OrderType, string>}
          defaultValue={order}
          className={Style.CryptoModalCenter}
          onChange={setOrder}
        />
      </div>
      <div className={Style.CryptoModalSection}>
        <Title>Cards per page</Title>
        <Slider
          className={Style.CryptoModalCenter}
          min={MIN_PER_PAGE_VALUE}
          max={MAX_PER_PAGE_VALUE}
          step={PER_PAGE_STEP}
          defaultValue={perPage}
          onChange={setPerPage}
        />
      </div>
      <div className={Style.CryptoModalSection}>
        <Title>Page number</Title>
        <Counter
          className={Style.CryptoModalCenter}
          minValue={MIN_PAGE_NUMBER}
          maxValue={MAX_PAGE_NUMBER}
          initialValue={pageNumber}
          onChange={setPageNumber}
        />
      </div>
      <div className={Style.CryptoModalSection}>
        <Title>Currency</Title>
        <Select
          items={currencyItems as Record<CurrencyType, string>}
          defaultValue={currency}
          className={Style.CryptoModalCenter}
          onChange={setCurrency}
        />
      </div>
      <div className={Style.CryptoModalButtonContainer}>
        <Button
          className={Style.CryptoModalButton}
          onClick={() => {
            onSubmit(initialState);
            closeModal();
          }}>Reset</Button>
        <Button
          className={Style.CryptoModalButton}
          disabled={isSubmitDisabled}
          onClick={() => {
            onSubmit({
              currency: currency,
              perPage: perPage,
              pageNumber: pageNumber || 1,
              order: `${order}_${change}`,
            });
            closeModal();
          }}
        >Update</Button>
      </div>
    </div>
  );
}
