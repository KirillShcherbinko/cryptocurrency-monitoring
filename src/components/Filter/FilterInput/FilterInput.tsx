import { useEffect, useMemo } from "react";
import { useFilter } from "../../../hooks/useFilter";
import { useInput } from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";

interface FilterInputProps<T> {
  onFilter: (filteredItems: T[]) => void;
}

export default function FilterInput<T>({ onFilter }: FilterInputProps<T>) {
  const { input } = useInput();
  const { items, filterKey } = useFilter<T>();

  // Используем useMemo для фильтрации данных
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      String(item[filterKey]).toLowerCase().startsWith(input.toLowerCase())
    );
  }, [input, items, filterKey]);

  useEffect(() => {
    onFilter(filteredItems);
  }, [filteredItems, onFilter]);

  return <Input placeholder="Search"/>;
}
