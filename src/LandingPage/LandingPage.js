import React from 'react'
import styled from '@emotion/styled'
import bgImage from '../images/powder2.jpg'
import { SearchInput } from '../components'
import { Redirect } from 'react-router-dom'

const LandingPageStyles = styled('div')`
  height: 100vh;
  width: 100vw;

  .hero-image {
    background: url(${bgImage}) no-repeat;
    background-position: center;
    background-size: cover;
    height: 50%;
  }

  .search-container {
    width: 100%;
    text-align: center;
  }
`

export const LandingPage = ({
  SearchQuery,
  handleQueryChange,
  handleSearch,
  products,
}) => {
  return (
    <LandingPageStyles>
      <div className="hero-image"></div>
      <div className="search-container">
        <SearchInput
          SearchQuery={SearchQuery}
          handleQueryChange={handleQueryChange}
          handleSearch={handleSearch}
        />
      </div>
      {products.length > 0 && (
        <Redirect
          to={{
            pathname: '/products',
          }}
        />
      )}
    </LandingPageStyles>
  )
}
