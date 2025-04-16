import Style from "./Pagination.module.css";
import nextIcon from "../../assets/icon-right.png";
import Button from "../../UI/Button/Button";

interface PaginationProps {
  pageNumber: number;
  isData: boolean;
  onSubmit: (value: number) => void;
}

export default function Pagination({
  pageNumber,
  isData,
  onSubmit,
}: PaginationProps) {
  const pageNumbers: number[] = [];

  if (pageNumber <= 2) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  } else if (!isData) {
    for (let i = pageNumber - 4; i <= pageNumber; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className={Style.Pagination}>
      <Button
        className={Style.PaginationButton}
        onClick={() => onSubmit(pageNumber - 1)}
      >
        <img className={Style.PaginationButtonIcon} src={nextIcon} alt="Prev" />
      </Button>
      <div className={Style.GroupButton}>
        {pageNumbers.map((item, index) => (
          <Button
            key={index}
            className={Style.PaginationButton}
            onClick={() => onSubmit(pageNumbers[index])}
          >
            {item}
          </Button>
        ))}
      </div>
      <Button
        className={Style.PaginationButton}
        onClick={() => onSubmit(pageNumber + 1)}
      >
        <img className={Style.PaginationButtonIcon} src={nextIcon} alt="Next" />
      </Button>
    </div>
  );
}
