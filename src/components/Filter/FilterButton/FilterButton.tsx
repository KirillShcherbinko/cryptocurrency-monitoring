import Style from "./FilterButton.module.css";
import FilterIcon from "../../../assets/icon-filter.png";
import { useFilter } from "../../../hooks/useFilter";
import { useModal } from "../../../hooks/useModal";
import Button from "../../../UI/Button/Button";

export default function FilterButton() {
  const { openModal } = useModal();
  const { filterContent } = useFilter();

  return (
    <Button className={Style.FilterButton} onClick={() => openModal(filterContent)}>
      Filters
      <img className={Style.FilterIcon} src={FilterIcon} alt="Filter Icon"/>
    </Button>
  );
}