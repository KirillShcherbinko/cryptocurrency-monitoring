import { useContext } from "react";
import DataContext, { DataContextType } from "../contexts/data/DataContext";


export function useData<T>(): T | null {
 // Использование контекста
  const context = useContext<DataContextType<T> | null>(DataContext);
  if (!context) throw new Error('DataContext must be used within DataProvider');

  return context.data as T;
}