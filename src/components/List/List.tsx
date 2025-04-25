import Style from "./List.module.css";
import classNames from "classnames";
import { ReactNode } from "react";

interface Identifiable {
  id: string | number;
}

interface ListProps<T> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  className: string;
}

export default function List<T extends Identifiable>({
  items,
  render,
  className,
}: ListProps<T>) {
  return (
    <ul className={classNames(Style.List, className ? className : null)}>
      {items.map((item, index) => (
        <li key={item.id ? item.id : index}>{render(item, index)}</li>
      ))}
    </ul>
  );
}
