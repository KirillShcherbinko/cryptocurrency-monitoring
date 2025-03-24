import { ReactNode, useState } from "react";
import SearchContext, { InputType } from "./SearchContext";

interface SearchProviderProps {
  type: InputType;
  placeholder: string;
  children: ReactNode;
}

export default function SearchProvider({ type, placeholder, children }: SearchProviderProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider value={{ type, placeholder, search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
