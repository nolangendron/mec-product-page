import React from 'react'
import PropTypes from 'prop-types'
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
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
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

const propTypes = {
  currentSearch: PropTypes.string,
  searchQuery: PropTypes.string,
  handleQueryChange: PropTypes.func,
  handleSearch: PropTypes.func,
  redirect: PropTypes.bool,
  clearSearch: PropTypes.func,
}

export const LandingPage = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  redirect,
  clearSearch,
}) => {
  return (
    <LandingPageStyles>
      <div className="hero-image">
        <span role="img" aria-label="tent at sunrise"></span>
      </div>
      <div role="img" className="logo">
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

LandingPage.propTypes = propTypes
