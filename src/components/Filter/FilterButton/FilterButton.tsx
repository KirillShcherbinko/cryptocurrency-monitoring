import { useFilter } from "../../../hooks/useFilter";
import { useModal } from "../../../hooks/useModal";
import Button from "../../../UI/Button/Button";

export default function FilterButton() {
  const { openModal } = useModal();
  const { filterContent } = useFilter();

  return (
    <div>
      <Button onClick={() => openModal(filterContent)}>Filter</Button>
    </div>
  );
}