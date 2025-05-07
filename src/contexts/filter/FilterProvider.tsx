import { ReactNode } from "react";
import FilterContext from "./FilterContext";

interface FilterProviderProps<T> {
  items: T[];
  onFilter: (value: string) => void;
  filterKey: keyof T;
  filterContent: ReactNode;
  children: ReactNode;
}

export default function FilterProvider<T>({
  items,
  onFilter,
  filterKey,
  filterContent,
  children,
}: FilterProviderProps<T>) {
  return (
    <FilterContext.Provider value={{ items, filterKey, filterContent, onFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
