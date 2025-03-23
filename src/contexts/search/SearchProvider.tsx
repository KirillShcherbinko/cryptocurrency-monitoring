import { ReactNode, useState } from "react";
import SearchContext from "./SearchContext";

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
