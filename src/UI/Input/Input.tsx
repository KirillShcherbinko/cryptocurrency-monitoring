import { useSearch } from "../../hooks/useSearch";

export default function Input() {
  const { search, setSearch } = useSearch();

  return (
    <input
      type="text"
      placeholder="Поиск"
      value={search}
      onChange={(evt) => setSearch(evt.target.value)}
    />
  );
  //<>🔎</>
}
