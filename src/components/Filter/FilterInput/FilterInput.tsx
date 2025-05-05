import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useFilter } from "../../../hooks/useFilter";
import Input from "../../../UI/Input/Input";

interface FilterInputProps<T> {
  onFilter: (filteredItems: T[]) => void;
}

export default function FilterInput<T>({ onFilter }: FilterInputProps<T>) {
  const [input, setInput] = useState<string>("");
  const { items, filterKey } = useFilter<T>();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      String(item[filterKey]).toLowerCase().startsWith(input.toLowerCase())
    );
  }, [input, items, filterKey]);

  useEffect(() => {
    onFilter(filteredItems);
  }, [filteredItems, onFilter]);

  return (
    <Input
      name="Filter"
      value={input}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        setInput(evt.target.value)
      }
      placeholder="Search"
    />
  );
}
