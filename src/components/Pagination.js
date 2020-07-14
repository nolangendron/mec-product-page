import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'
import { colors } from '../styles/colors'

const PaginationStyles = styled('nav')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;

  .page-button {
    width: 40px;
    margin: 5px;
    padding: 10px;
    border: none;
    background: ${colors.backgroundLight};
    :hover {
      cursor: pointer;
      background: ${colors.backgroundHover};
      color: ${colors.fontLight};
    }
  }

  .active {
    background: ${colors.backgroundHover};
    color: ${colors.fontLight};
  }
`

const useStyles = makeStyles({
  root: {
    margin: '5px',
    padding: '10px',
    background: `${colors.backgroundLight}`,
    '&:hover': {
      cursor: 'pointer',
      background: `${colors.backgroundHover}`,
      color: `${colors.fontLight}`,
    },
  },
})

const propTypes = {
  currentPage: PropTypes.number,
  paginateArrow: PropTypes.func,
  paginate: PropTypes.func,
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
}

export const Pagination = ({
  currentPage,
  paginateArrow,
  paginate,
  productsPerPage,
  totalProducts,
}) => {
  const classes = useStyles()
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <PaginationStyles>
      {currentPage > 1 && (
        <ArrowBackIos
          onClick={() => paginateArrow('back')}
          className={classes.root}
          fontSize="large"
        />
      )}
      {pageNumbers.map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => paginate(number)}
          className={
            currentPage === number ? 'active page-button' : 'page-button'
          }
        >
          {number}
        </button>
      ))}
      {currentPage === pageNumbers.length ? null : (
        <ArrowForwardIos
          onClick={() => paginateArrow('forward')}
          className={classes.root}
          fontSize="large"
        />
      )}
    </PaginationStyles>
  )
}

Pagination.propTypes = propTypes
