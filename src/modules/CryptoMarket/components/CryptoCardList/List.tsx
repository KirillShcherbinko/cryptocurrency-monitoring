import Style from "./List.module.css";
import { JSX } from "react";

interface IListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

export default function List<T>({ items, render }: IListProps<T>) {
  return <ul className={Style.List}>
    {items.map((item, index) => (
      <li key={(item as any).id || index}>{render(item)}</li>
    ))}
  </ul>;
}
