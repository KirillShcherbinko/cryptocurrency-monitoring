import { createContext } from "react";

export type InputType = 'text' | 'number';

export interface SearchContextType {
  type: InputType;
  placeholder: string;
  search: string;
  setSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
