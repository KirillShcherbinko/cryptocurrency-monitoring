import { useModal } from "../../../hooks/useModal";
import Button from "../../../UI/Button/Button";

export default function FilterButton() {
  const { openModal } = useModal();

  return (
    <div>
      <Button  onClick={openModal}>Filter</Button>
    </div>
  );
}