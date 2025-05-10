import Style from "./Filter.module.css";
import ModalProvider from "../../UI/Modal/ModalContext/ModalProvider";
import FilterButton from "./FilterButton/FilterButton";
import FilterInput from "./FilterInput/FilterInput";
import { ReactNode } from "react";
import { useFilter } from "../../hooks/useFilter";
import Title from "../../UI/Title/Title";

interface FilterProps {
  children?: ReactNode;
}

export default function Filter({ children }: FilterProps) {
  const {title} = useFilter();

  return (
    <div className={Style.Filter}>
      <div className={Style.Header}>
        <Title type="huge" className={Style.Title}>{title}</Title>
        <div className={Style.Section}>
          <ModalProvider>
            <FilterButton />
          </ModalProvider>
          <FilterInput />
        </div>
      </div>
      {children}
    </div>
  );
}
