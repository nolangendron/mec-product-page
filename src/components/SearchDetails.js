import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const SearchDetailsStyles = styled('div')`
  margin-left: 1em;

  .query-string {
    text-align: center;
  }

  .query-string h1 {
    margin: 0;
  }

  .query-string p {
    margin: 0;
  }
`

const propTypes = {
  currentSearch: PropTypes.string,
  numberOfProducts: PropTypes.number,
}

export const SearchDetails = ({ currentSearch, numberOfProducts }) => {
  return (
    <SearchDetailsStyles>
      {numberOfProducts ? (
        <Fragment>
          <div className="query-string">
            <p>Showing results for</p>
            <h1>"{currentSearch}"</h1>
          </div>
          <p>{numberOfProducts} items</p>
        </Fragment>
      ) : null}
    </SearchDetailsStyles>
  )
}

SearchDetails.propTypes = propTypes
