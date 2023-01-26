import React from 'react'
import { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import './PaginationElements.css'

let active = 2;
let items = [];
for(let number = 1; number <=5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const PaginationElements = () => {

  return (
    <div>
          <Pagination className='pagination'>
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      <br/>
    </div>
  )
}

export default PaginationElements