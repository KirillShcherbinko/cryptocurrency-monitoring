import { AnimatePresence, motion } from "framer-motion";
import Style from "./RadioForm.module.css";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

interface RadioProps<T extends string> {
  items: Record<T, string>;
  defaultValue: T;
  onChange: (value: T) => void;
}

export default function Radio<T extends string>({
  items,
  defaultValue,
  onChange,
}: RadioProps<T>) {
  const keys: T[] = useMemo(() => Object.keys(items) as T[], [items]);
  const values: string[] = useMemo(() => Object.values(items), [items]);

  const [selected, setSelected] = useState<T>(defaultValue);
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
          <span className={Style.RadioButton}>
            <AnimatePresence>
              {selected === `${keys[index]}` && (<motion.span
                className={Style.RadioDot}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1.4, 1],
                  transition: {
                    duration: 0.2,
                    times: [0, 0.9, 1],
                  }
                }}
                exit={{ scale: 0 }}
              />)}
            </AnimatePresence>
          </span>
          {value}
        </label>
      ))}
    </form>
  );
}