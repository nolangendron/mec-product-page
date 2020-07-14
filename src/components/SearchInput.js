import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Search, Clear } from '@material-ui/icons'
import { colors } from '../styles/colors'

const SearchInputStyles = styled('div')`
  display: flex;
  flex-direction: row;
  margin: 1em;
  min-width: 200px;
  justify-content: ${(props) => (props.landingPage ? 'center' : 'left')};

  input[type='text'] {
    -webkit-appearance: none;
    background-color: ${colors.backgroundMedium};
    color: ${colors.fontLight};
    height: 50px;
    min-height: 40px;
    width: 30%;
    min-width: 190px;
    padding: 10px;
    border: none;
    font-size: 1em;
    :focus {
      color: ${colors.fontLight};
      outline: none;
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
    visibility: ${(props) => (props.searchQuery > 0 ? 'visible' : 'hidden')};
  }

  .icon-button {
    height: 50px;
    width: 40px;
    border: none;
    background-color: ${colors.backgroundMedium};
    :hover {
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
`

const propTypes = {
  searchQuery: PropTypes.string,
  handleQueryChange: PropTypes.func,
  handleSearch: PropTypes.func,
  landingPage: PropTypes.bool,
  clearSearch: PropTypes.func,
}

export const SearchInput = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  landingPage,
  clearSearch,
}) => {
  return (
    <SearchInputStyles
      searchQuery={searchQuery && searchQuery.length}
      landingPage={landingPage}
    >
      <form autoComplete="off" onSubmit={handleSearch}>
        <label htmlFor="input"></label>
        <input
          id="input"
          type="text"
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

SearchInput.propTypes = propTypes
