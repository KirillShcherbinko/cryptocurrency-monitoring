import { createContext } from "react";

export interface DataContextType<T> {
  data: T | null;
}

const DataContext = createContext<DataContextType<any> | null>(null);

export default DataContext;