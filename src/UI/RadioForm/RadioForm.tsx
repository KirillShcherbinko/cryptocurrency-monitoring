import Style from "./RadioForm.module.css";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

interface RadioProps<T extends string> {
  items: Record<T, string>;
  onChange: (value: T) => void;
}

export default function Radio<T extends string>({items, onChange}: RadioProps<T>) {
  const keys: T[] = useMemo(() => Object.keys(items) as T[], [items]);
  const values: string[] = useMemo(() => Object.values(items), [items]);

  const [selected, setSelected] = useState<T>(keys[0]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSelected(e.target.value as T);

  useEffect(() => {
    onChange?.(selected);
  }, [selected])

  return (
    <form className={Style.RadioForm}>
      {values.map((value, index) => (
        <label key={index} className={Style.RadioField}>
          <input
            type="radio"
            id={`radio-button-${index}`}
            value={`${keys[index]}`}
            name='radio'
            checked={selected === `${keys[index]}`}
            onChange={handleChange}
          />
          <span className={Style.RadioButton}/>
          {value}
        </label>
      ))}
    </form>
  );
}