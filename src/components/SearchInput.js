import React from 'react'
import styled from '@emotion/styled'
import { Search, Clear } from '@material-ui/icons'
import { colors } from '../styles/colors'

const SearchInputStyles = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1em;
  justify-content: ${(props) => (props.landingPage ? 'center' : 'left')};

  input[type='search'] {
    -webkit-appearance: none;
    background-color: ${colors.backgroundMedium};
    color: ${colors.fontLight};
    height: 50px;
    min-height: 40px;
    width: 30%;
    min-width: 300px;
    padding: 10px;
    border: none;
    font-size: 1em;

    :focus {
      color: ${colors.fontLight};
    }
    ::placeholder {
      color: ${colors.fontLight};
      opacity: 1;
    }
  }

  .cancel::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  .clear-icon {
    visibility: ${(props) =>
      props.searchQuery.length > 0 ? 'visible' : 'hidden'};
  }

  .icon-button {
    height: 50px;
    width: 40px;
    border: none;
    background-color: ${colors.backgroundMedium};
    :hover {
      cursor: pointer;
    }
  }
`
export const SearchInput = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  landingPage,
  clearSearch,
}) => {
  return (
    <SearchInputStyles searchQuery={searchQuery} landingPage={landingPage}>
      <form onSubmit={handleSearch}>
        <label htmlFor="my-input"></label>
        <input
          id="my-input"
          type="search"
          aria-describedby="my-helper-text"
          onChange={handleQueryChange}
          value={searchQuery}
          placeholder="I'm looking for"
          className="cancel"
        />
      </form>
      <button onClick={clearSearch} className="icon-button">
        <Clear className="clear-icon" style={{ color: 'white' }} />
      </button>
      <button onClick={handleSearch} className="icon-button">
        <Search style={{ color: 'white' }} />
      </button>
    </SearchInputStyles>
  )
}
