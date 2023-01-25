import React from "react";
import { Pagination } from "react-bootstrap";
import "../css/PaginationElements.css";

const PaginationElements = () => {
  return (
    <div>
      <Pagination id="pagination">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default PaginationElements;
