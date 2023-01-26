import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../css/PaginationElements.css';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const PaginationElements = () => {
  return (
    <div>
      <Pagination id="pagination">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <Pagination className="pagination">
        <Pagination.First />
        <Pagination.Prev />

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <br />
    </div>
  );
};

export default PaginationElements;
