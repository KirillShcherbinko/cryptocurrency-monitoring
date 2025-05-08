import { useContext } from "react";
import FilterContext, {
  FilterContextType,
} from "../components/Filter/FilterContext/FilterContext";

export function useFilter<T>() {
  const context = useContext<FilterContextType<T> | null>(FilterContext);
  if (!context) throw new Error("FilterContext must be within FilterProvider");
  return context;
}
