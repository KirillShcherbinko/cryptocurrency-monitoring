import { ReactNode } from "react";
import DataContext from "./DataContext";

interface DataProviderProps<T> {
  data: T;
  children: ReactNode;
}

export default function DataProvider<T>({ data, children }: DataProviderProps<T>) {
  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  )
}