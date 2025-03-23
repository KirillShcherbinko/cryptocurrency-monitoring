import { createContext } from "react";

export interface SearchContextType {
  search: string;
  setSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
