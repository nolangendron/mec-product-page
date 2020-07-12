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
          <h4>{currentSearch}</h4>
          <h4>{numberOfProducts} items</h4>
        </div>
      ) : null}
    </SearchDetailsStyles>
  )
}
