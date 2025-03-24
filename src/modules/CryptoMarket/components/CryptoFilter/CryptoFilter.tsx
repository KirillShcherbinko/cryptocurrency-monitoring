import Style from './CryptoFilter.module.css';
import { JSX } from "react";
import { useSearch } from "../../../../hooks/useSearch";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import { useModal } from "../../../../hooks/useModal";
import { ICryptoParams } from "../../types";
import CryptoModalForm from "../CryptoModalForm/CryptoModalForm";
import Modal from "../../../../UI/Modal/Modal";

interface CryptoFilterProps<T> {
  items: T[];
  filterKey: keyof T;
  onSubmit: (params: Partial<ICryptoParams>) => void
  render: (filteredItems: T[]) => JSX.Element;
}

export default function CryptoFilter<T>({
  items,
  filterKey,
  onSubmit,
  render,
}: CryptoFilterProps<T>) {
  const { search } = useSearch();
  const { openModal } = useModal();

  const filteredItems = items.filter((item: T) =>
    String(item[filterKey]).toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className={Style.CryptoFilter}>
      <div className={Style.CryptoFilterHeader}>
        <Button name="Фильтр" onClick={openModal} />
        <Input />
      </div>
      {render(filteredItems)}
      <Modal>
        <CryptoModalForm onSubmit={onSubmit}/>
      </Modal>
    </div>
  );
}
