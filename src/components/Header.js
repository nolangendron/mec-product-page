import React from 'react'
import styled from '@emotion/styled'
import logo from '../images/mec-logo.svg.png'
import SearchInput from './SearchInput'

const HeaderStyles = styled('header')`
  display: flex;
  flex-direction: row;
  background-color: #191919;
  height: 80px;
  align-items: center;

  .flex-item {
    height: 50px;
    margin: 1em;
  }

  .logo {
    width: 50px;
  }
`
export const Header = ({ handleSearch }) => {
  return (
    <HeaderStyles>
      <img className="flex-item logo" src={logo} alt="MEC logo" />
      <SearchInput handleSearch={handleSearch} />
    </HeaderStyles>
  )
}
