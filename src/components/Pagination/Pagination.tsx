import Style from "./Pagination.module.css";
import nextIcon from "../../assets/icon-next.png";
import prevIcon from "../../assets/icon-prev.png";
import Button from "../../UI/Button/Button";
import classNames from "classnames";
import { useWindowWidth } from "../../hooks/useWindowWidth";

interface PaginationProps {
  pageNumber: number;
  isData: boolean;
  onSubmit: (value: number) => void;
}

const CRITICAL_WIDTH = 500;
const SMALL_SCREEN_PAGE_NUMBER = 3;
const SCREEN_PAGE_NUMBER = 5; 

const getPageNumbers = (current: number, hasNext: boolean, width: number): number[] => {
  const maxVisible = width < CRITICAL_WIDTH ? SMALL_SCREEN_PAGE_NUMBER : SCREEN_PAGE_NUMBER;
  const middle = Math.ceil(maxVisible / 2);
  const pages: number[] = [];

  if (current <= middle) {
    for (let i = 1; i <= maxVisible; i++) {
      pages.push(i);
    }
  } else if (!hasNext) {
    const start = current - maxVisible + 1 > 0 ? current - maxVisible + 1 : 1;
    for (let i = start; i < start + maxVisible; i++) {
      pages.push(i);
    }
  } else {
    const start = current - middle + 1;
    for (let i = start; i < start + maxVisible; i++) {
      pages.push(i);
    }
  }

  return pages;
}

export default function Pagination({
  pageNumber,
  isData,
  onSubmit,
}: PaginationProps) {
  const width = useWindowWidth();
  const pages = getPageNumbers(pageNumber, isData, width);

  return (
    <div className={Style.Pagination}>
      {pageNumber > 1 && (
        <Button
          className={Style.Button}
          onClick={() => onSubmit(pageNumber - 1)}
        >
          <img
            className={Style.Icon}
            src={prevIcon}
            alt="Previous"
          />
        </Button>
      )}

      <div className={Style.GroupButton}>
        {pages.map((item) => (
          <Button
            key={item}
            className={classNames(
              Style.Button,
              pageNumber === item && Style.Selected
            )}
            onClick={() => onSubmit(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      {isData && (
        <Button
          className={Style.Button}
          onClick={() => onSubmit(pageNumber + 1)}
        >
          <img
            className={Style.Icon}
            src={nextIcon}
            alt="Next"
          />
        </Button>
      )}
    </div>
  );
}
