import { createContext, ReactNode } from "react";

export interface FilterContextType<T> {
  items: T[];
  title: string;
  onFilter: (value: string) => void;
  filterKey: keyof T;
  filterContent: ReactNode;
}

const FilterContext = createContext<FilterContextType<any> | null>(null);

export default FilterContext;
