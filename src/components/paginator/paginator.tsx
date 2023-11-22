import { useEffect, useState } from "react";
import AppButton from "../button/button";

const paginatorButtons = (
  buttons: number[],
  onPageClick: (page: number) => void
) => {
  return (
    <>
      {buttons.map((b) => (
        <AppButton onClick={() => onPageClick(b)} key={b} paddingX="15px">
          {b}
        </AppButton>
      ))}
    </>
  );
};

type Props = {
  pagesCount: number;
  buttonsCount: number;
  onPageClick: (page: number) => void;
  paginatorStart: number;
  onPortionClick: (forward: boolean) => void;
};

function Paginator({
  pagesCount,
  buttonsCount,
  onPageClick,
  paginatorStart,
  onPortionClick
}: Props) {
  const [buttons, setButtons] = useState<number[]>([]);

  
  useEffect(() => {
    let tempArray: number[] = [];
    for (let i = paginatorStart; i < paginatorStart + buttonsCount; i++) {
      tempArray.push(i);
    }
    setButtons(tempArray);
  }, [paginatorStart, buttonsCount]);

  

  return (
    <div className="paginator-wrapper">
      <div className="paginator-container">
        {buttons && (
          <>
            {paginatorStart !== 1 && (
              <AppButton onClick={() => onPortionClick(false)}>
                {"<<"}
              </AppButton>
            )}
            {paginatorButtons(buttons, onPageClick)}
            {!(paginatorStart === pagesCount - (buttonsCount - 1)) && (
              <AppButton onClick={() => onPortionClick(true)}>{">>"}</AppButton>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Paginator;
