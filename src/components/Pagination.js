import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

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

const useStyles = makeStyles({
  root: {
    margin: '5px',
    padding: '10px',
    background: 'lightgrey',
    '&:hover': {
      cursor: 'pointer',
      background: 'grey',
    },
  },
})
export const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  paginateArrow,
}) => {
  const pageNumbers = []
  const classes = useStyles()

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginationStyles>
      <ArrowBackIos
        onClick={() => paginateArrow('back')}
        className={classes.root}
        fontSize="large"
      />
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="page-button"
        >
          {number}
        </button>
      ))}
      <ArrowForwardIos
        onClick={() => paginateArrow('forward')}
        className={classes.root}
        fontSize="large"
      />
    </PaginationStyles>
  )
}
