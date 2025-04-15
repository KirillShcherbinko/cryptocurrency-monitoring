import Style from "./Select.module.css";
import SelectIcon from "../../assets/icon-down.png";
import { ReactNode, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";

interface SelectProps<T extends string> {
  items: Record<T, string>;
  onChange?: (value: T) => void;
}

export default function Select<T extends string>({
  items,
  onChange,
}: SelectProps<T>) {
  const keys: T[] = useMemo(() => Object.keys(items) as T[], [items]);
  const values: string[] = useMemo(() => Object.values(items), [items]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(values[0]);

  const selectRef = useRef<HTMLDivElement>(null);

  const filteredValues = useMemo(
    () => values.filter((value) => value !== selected),
    [items, selected]
  );

  useClickOutside(selectRef, () => setIsOpen(false));

  return (
    <div className={Style.Select} ref={selectRef}>
      <motion.button
        className={Style.SelectButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        {selected as ReactNode}
        <motion.img
          className={Style.SelectIcon}
          src={SelectIcon}
          alt="Выпадающий список"
          animate={{ rotate: isOpen ? 180 : 0, transition: { duration: 0.2 } }}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={Style.OptionGroup}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, transition: { duration: 0.3 } }}
            exit={{ scaleY: 0, transition: { duration: 0.3 } }}
          >
            {filteredValues.map((value, index) => (
              <motion.li
                key={index}
                className={Style.Option}
                onClick={() => {
                  setSelected(value);
                  onChange?.(keys.find((k) => items[k] === value) || keys[0]);
                  setIsOpen(false);
                }}
              >
                {value as ReactNode}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
