import { ReactNode } from "react";
import FilterContext from "./FilterContext";

interface FilterProviderProps<T> {
  items: T[];
  filterKey: keyof T;
  filterContent: ReactNode;
  children: ReactNode;
}

export default function FilterProvider<T>({
  items,
  filterKey,
  filterContent,
  children,
}: FilterProviderProps<T>) {
  return (
    <FilterContext.Provider value={{ items, filterKey, filterContent }}>
      {children}
    </FilterContext.Provider>
  );
}
