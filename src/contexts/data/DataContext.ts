import { createContext } from "react";

export interface DataContextType<T> {
  data: T | null;
}

const DataContext = createContext<DataContextType<unknown> | null>(null);

export default DataContext;