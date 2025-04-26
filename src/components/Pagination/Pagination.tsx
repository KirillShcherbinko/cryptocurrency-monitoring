import Style from "./Pagination.module.css";
import nextIcon from "../../assets/icon-next.png";
import prevIcon from "../../assets/icon-prev.png";
import Button from "../../UI/Button/Button";
import classNames from "classnames";

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
    const firstPageNumber = pageNumber >= 5 ? pageNumber - 4 : 1; 
    for (let i = firstPageNumber; i <= firstPageNumber + 4; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className={Style.Pagination}>
      {(pageNumber > 1) && <Button
        className={Style.PaginationButton}
        onClick={() => onSubmit(pageNumber - 1)}
      >
        <img className={Style.PaginationButtonIcon} src={prevIcon} alt="Prev" />
      </Button>}
      <div className={Style.GroupButton}>
        {pageNumbers.map((item, index) => (
          <Button
            key={index}
            className={classNames(Style.PaginationButton, pageNumber === item ? Style.Selected : null)}
            onClick={() => onSubmit(pageNumbers[index])}
          >
            {item}
          </Button>
        ))}
      </div>
      {isData && <Button
        className={Style.PaginationButton}
        onClick={() => onSubmit(pageNumber + 1)}
      >
        <img className={Style.PaginationButtonIcon} src={nextIcon} alt="Next" />
      </Button>}
    </div>
  );
}
