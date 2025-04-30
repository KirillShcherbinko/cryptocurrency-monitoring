import Style from "./Filter.module.css";
import ModalProvider from "../../contexts/modal/ModalProvider";
import { useFilter } from "../../hooks/useFilter";
import FilterButton from "./FilterButton/FilterButton";
import FilterInput from "./FilterInput/FilterInput";
import { JSX, useState } from "react";

interface FilterProps<T> {
  render: (filteredItems: T[]) => JSX.Element;
}

export default function Filter<T>({ render }: FilterProps<T>) {
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const { filterContent } = useFilter<T>();

  return (
    <div className={Style.Filter}>
      <div className={Style.FilterHeader}>
        <ModalProvider content={filterContent}>
          <FilterButton />
        </ModalProvider>
        <FilterInput onFilter={setFilteredItems} />
      </div>
      {render(filteredItems)}
    </div>
  );
}
