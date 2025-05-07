import { ChangeEvent, useEffect, useState } from "react";
import { useFilter } from "../../../hooks/useFilter";
import Input from "../../../UI/Input/Input";

export default function FilterInput<T>() {
  const [input, setInput] = useState<string>("");
  const { items, filterKey, onFilter } = useFilter<T>();

  useEffect(() => {
    onFilter(input);
  }, [input, items, filterKey]);

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
