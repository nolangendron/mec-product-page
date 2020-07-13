import React from 'react'
import styled from '@emotion/styled'

const SearchDetailsStyles = styled('div')`
  margin-left: 1em;
`

export const SearchDetails = ({ currentSearch, numberOfProducts }) => {
  return (
    <SearchDetailsStyles>
      {numberOfProducts ? (
        <div>
          <h1>{currentSearch}</h1>
          <p>{numberOfProducts} items</p>
        </div>
      ) : null}
    </SearchDetailsStyles>
  )
}
