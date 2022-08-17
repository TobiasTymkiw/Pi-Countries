import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./pagination.css";
import { setCurrentPage } from "../../redux/actions";

//Homecompoent lines
/* 
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPages] = useState(10);

const indexOfLastItem = currentPage * itemsPerPages;
const indexOfFirstItem = indexOfLastItem - itemsPerPages;
const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem); */

export default function PaginationComponent({
  allCountries,
  itemsPerPages,
  currentPage,
}) {
  const dispatch = useDispatch();
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];

  for (let i = 1; i <= Math.ceil(allCountries.length / itemsPerPages); i++) {
    pages.push(i);
  }
  
  const cambiarPagina = (numero) => {
    dispatch(setCurrentPage(numero));
  };

  const handleClick = (e) => {
    cambiarPagina(Number(e.target.id));
  };

  const handleNextbtn = () => {
    cambiarPagina(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    cambiarPagina(currentPage + -1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNextbtn} hidden>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li onClick={handlePrevbtn} hidden>
        &hellip;
      </li>
    );
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => handleClick(e)}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      {pages.length > 0 ? (
        <ul className="pageNumbers">
          <li>
            <button
              disabled={currentPage === pages[0] ? true : false}
              onClick={handlePrevbtn}
            >
              Prev
            </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
