import { JSX } from "react";
import { useSearch } from "../../hooks/useSearch";
import Input from "../../UI/Input/Input";

interface FilterProps<T> {
  items: T[];
  filterKey: keyof T;
  render: (filteredItems: T[]) => JSX.Element;
}

export default function Filter<T>({ items, filterKey, render }: FilterProps<T>) {
  const { search } = useSearch();

  const filteredItems = items.filter((item: T) => 
    String(item[filterKey]).toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div>
      <button>Фильтр</button>
      <Input />
      {render(filteredItems)}
    </div>
  )
  
}