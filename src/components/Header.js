import React from 'react'
import styled from '@emotion/styled'
import logo from '../images/MEC_logo_2013.svg'
import { SearchInput } from './SearchInput'
import { Link } from 'react-router-dom'

const HeaderStyles = styled('header')`
  display: flex;
  flex-direction: row;
  background-color: #191919;
  height: 80px;
  width: 100%;
  align-items: center;

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
export const Header = ({ searchQuery, handleQueryChange, handleSearch }) => {
  return (
    <HeaderStyles>
      <Link to="/">
        <img className="flex-item logo" src={logo} alt="MEC logo" />
      </Link>
      <SearchInput
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
      />
    </HeaderStyles>
  )
}
