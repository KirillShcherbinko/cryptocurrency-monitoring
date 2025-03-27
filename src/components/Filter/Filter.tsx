import Style from "./Filter.module.css";
import ModalProvider from "../../contexts/modal/ModalProvider";
import SearchProvider from "../../contexts/search/SearchProvider";
import { useFilter } from "../../hooks/useFilter";
import FilterButton from "./FilterButton/FilterButton";
import FilterSearch from "./FilterSearch/FilterSearch";
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
        <SearchProvider type="text" placeholder="Поиск 🔎">
          <FilterSearch onFilter={setFilteredItems}/>
        </SearchProvider>
      </div>
      {render(filteredItems)}
    </div>
  );
}
