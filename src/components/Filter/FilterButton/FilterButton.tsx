import Style from "./FilterButton.module.css";
import FilterIcon from "../../../assets/icon-filter.png";
import { useFilter } from "../../../hooks/useFilter";
import { useModal } from "../../../hooks/useModal";
import Button from "../../../UI/Button/Button";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export default function FilterButton() {
  const { openModal } = useModal();
  const { filterContent } = useFilter();

  const width = useWindowWidth();

  return (
    <Button className={Style.FilterButton} onClick={() => openModal(filterContent)}>
      {width > 350 ? "Filters" : null}
      <img className={Style.Icon} src={FilterIcon} alt="Filter Icon"/>
    </Button>
  );
}