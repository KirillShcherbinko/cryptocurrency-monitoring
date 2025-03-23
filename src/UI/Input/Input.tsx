import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <input
      type="text"
      placeholder="Поиск"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
  //<>🔎</>
}
