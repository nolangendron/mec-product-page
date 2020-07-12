import React from 'react'
import styled from '@emotion/styled'

const PaginationStyles = styled('nav')`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .page-button {
    margin: 5px;
    padding: 10px;
    border: none;
    :hover {
      cursor: pointer;
      background: grey;
    }
  }
`

export const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginationStyles>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="page-button"
        >
          {number}
        </button>
      ))}
    </PaginationStyles>
  )
}
