import React from 'react';
import { useState } from 'react';
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
const PaginationElements = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pagination id="pagination">
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
