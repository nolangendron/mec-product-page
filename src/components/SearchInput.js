import React from 'react'
import styled from '@emotion/styled'
import { Search } from '@material-ui/icons'

const SearchInputStyles = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1em;
  justify-content: ${(props) => (props.landingPage ? 'center' : 'left')};

  input[type='search'] {
    background-color: #333;
    color: white;
    height: 50px;
    min-height: 40px;
    width: 30%;
    min-width: 300px;
    padding: 10px;
    border: none;
    font-size: 1em;
    :focus {
      color: white;
    }
    ::placeholder {
      color: white;
      opacity: 1;
    }
  }

  .search-icon {
    height: 50px;
    width: 40px;
    border: none;
    background: #333;
  }
`
export const SearchInput = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  landingPage,
}) => {
  return (
    <SearchInputStyles landingPage={landingPage}>
      <form onSubmit={handleSearch}>
        <label htmlFor="my-input"></label>
        <input
          id="my-input"
          type="search"
          aria-describedby="my-helper-text"
          onChange={handleQueryChange}
          value={searchQuery}
          placeholder="I'm looking for"
        />
      </form>
      <button className="search-icon">
        <Search style={{ color: 'white' }} />
      </button>
    </SearchInputStyles>
  )
}
