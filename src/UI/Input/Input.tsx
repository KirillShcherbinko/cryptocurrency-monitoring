import Style from './Input.module.css';
import { useSearch } from "../../hooks/useSearch";

export default function Input() {
  const { type, placeholder, search, setSearch } = useSearch();

  return (
    <input
      className={Style.Input}
      type={type}
      placeholder={placeholder}
      value={search}
      onChange={(evt) => setSearch(evt.target.value)}
    />
  );
  //<>🔎</>
}
