import Style from "./Select.module.css";
import SelectIcon from "../../assets/icon-down.png";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";

interface SelectProps {
  items: string[];
}

export default function Select({ items }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(items[0]);

  const selectRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(
    () => items.filter((item) => item !== selected),
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
        {selected}
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
            {filteredItems.map((item, index) => (
              <motion.li
                key={index}
                className={Style.Option}
                onClick={() => {
                  setSelected(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
