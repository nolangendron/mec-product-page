import React from 'react'
import styled from '@emotion/styled'
import bgImage from '../images/bgImage.jpg'
import logo from '../images/MEC_logo_2013.svg'
import { SearchInput } from '../components'
import { Redirect } from 'react-router-dom'

const LandingPageStyles = styled('div')`
  height: 100vh;
  width: 100vw;

  .hero-image {
    background: url(${bgImage}) no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 70%;
  }

  .logo {
    text-align: center;
    margin-top: -87.5px;
  }

  .logo img {
    width: 175px;
    height: 175px;
  }
`

export const LandingPage = ({
  currentSearch,
  searchQuery,
  handleQueryChange,
  handleSearch,
  redirect,
  clearSearch,
}) => {
  return (
    <LandingPageStyles>
      <div className="hero-image"></div>
      <div className="logo">
        <img src={logo} alt="MEC logo" />
      </div>
      <SearchInput
        landingPage
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      {redirect && <Redirect push to={`/products`} />}
    </LandingPageStyles>
  )
}
