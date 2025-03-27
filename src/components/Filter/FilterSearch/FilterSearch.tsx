import { useEffect, useMemo } from "react";
import { useFilter } from "../../../hooks/useFilter";
import { useSearch } from "../../../hooks/useSearch";
import Input from "../../../UI/Input/Input";

interface FilterSearchProps<T> {
  onFilter: (filteredItems: T[]) => void;
}

export default function FilterSearch<T>({ onFilter }: FilterSearchProps<T>) {
  const { search } = useSearch();
  const { items, filterKey } = useFilter<T>();
  
  
  // Используем useMemo для фильтрации данных
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      String(item[filterKey]).toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, items, filterKey]);

  useEffect(() => {
    onFilter(filteredItems);
  }, [filteredItems, onFilter]);

  return (
    <Input/>
  );
}