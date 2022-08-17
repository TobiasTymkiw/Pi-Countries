import React, { useState, useEffect } from "react";
import CardsComponent from "../Cards/CardsComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import UnifyComponent from "../OrdFilterComponent/UnifyComponents";
import PaginationComponent from "../Pagination/PaginationComponent";
import "./homeComponent.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const [itemsPerPages] = useState(10);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  const currentItems = allCountries.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="home">
      <div>
        <UnifyComponent />
      </div>
      <div>
        <CardsComponent allCountries={currentItems} />
      </div>
      <div className="pagination">
        <PaginationComponent
          allCountries={allCountries}
          itemsPerPages={itemsPerPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
