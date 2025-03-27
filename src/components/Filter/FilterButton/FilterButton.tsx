import { useModal } from "../../../hooks/useModal";
import Button from "../../../UI/Button/Button";

export default function FilterButton() {
  const { openModal } = useModal();

  return (
    <div>
      <Button name="Фильтр" onClick={openModal}/>
    </div>
  );
}