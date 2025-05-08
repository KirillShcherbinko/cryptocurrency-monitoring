import Style from "./Filter.module.css";
import ModalProvider from "../../UI/Modal/ModalContext/ModalProvider";
import FilterButton from "./FilterButton/FilterButton";
import FilterInput from "./FilterInput/FilterInput";
import { ReactNode } from "react";

interface FilterProps {
  children?: ReactNode;
}

export default function Filter({ children }: FilterProps) {
  return (
    <div className={Style.Filter}>
      <div className={Style.FilterHeader}>
        <ModalProvider>
          <FilterButton />
        </ModalProvider>
        <FilterInput />
      </div>
      {children}
    </div>
  );
}
