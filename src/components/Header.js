import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import logo from '../images/MEC_logo_2013.svg'
import { SearchInput } from './SearchInput'
import { Link } from 'react-router-dom'
import { colors } from '../styles/colors'

const HeaderStyles = styled('header')`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  background-color: ${colors.backgroundDark};
  height: 80px;
  width: 100%;
  align-content: center;

  .flex-item {
    height: 50px;
    margin: 1em;
  }

  .logo {
    width: 50px;
    :hover {
      cursor: pointer;
    }
  }
`

const propTypes = {
  searchQuery: PropTypes.string,
  handleQueryChange: PropTypes.func,
  handleSearch: PropTypes.func,
  clearSearch: PropTypes.func,
}

export const Header = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  clearSearch,
}) => {
  return (
    <HeaderStyles>
      <Link to="/">
        <img className="flex-item logo" src={logo} alt="MEC logo" />
      </Link>
      <SearchInput
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
    </HeaderStyles>
  )
}

Header.prototypes = propTypes
