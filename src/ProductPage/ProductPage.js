import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {
  Header,
  SearchDetails,
  ProductsList,
  BreadCrumbsNav,
  NoProducts,
} from '../components'

const ProductPageStyles = styled('div')`
  .product-list-container {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 80px;
  }

  @media screen and (min-width: 480px) {
    .product-list-container {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`

const propTypes = {
  searchQuery: PropTypes.string,
  handleQueryChange: PropTypes.func,
  currentSearch: PropTypes.string,
  handleSearch: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
  currentProducts: PropTypes.arrayOf(PropTypes.object),
  paginate: PropTypes.func,
  paginateArrow: PropTypes.func,
  currentPage: PropTypes.number,
  productsPerPage: PropTypes.number,
  fetchSuccess: PropTypes.string,
  clearSearch: PropTypes.func,
  totalProducts: PropTypes.number,
  toggleRedirect: PropTypes.func,
}

export const ProductPage = ({
  searchQuery,
  handleQueryChange,
  currentSearch,
  handleSearch,
  products,
  currentProducts,
  paginate,
  paginateArrow,
  currentPage,
  productsPerPage,
  fetchSuccess,
  clearSearch,
  totalProducts,
  toggleRedirect,
}) => {
  useEffect(() => {
    toggleRedirect()
  }, [toggleRedirect])

  return (
    <ProductPageStyles>
      <Header
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      <section className="product-list-container">
        <BreadCrumbsNav />
        <SearchDetails
          currentSearch={currentSearch}
          numberOfProducts={products && products.length}
        />
        {fetchSuccess === 'success' && (
          <ProductsList
            currentProducts={currentProducts}
            currentPage={currentPage}
            paginateArrow={paginateArrow}
            paginate={paginate}
            productsPerPage={productsPerPage}
            totalProducts={totalProducts}
          />
        )}
        {fetchSuccess === 'fail' && (
          <NoProducts currentSearch={currentSearch} />
        )}
      </section>
    </ProductPageStyles>
  )
}

ProductPage.propTypes = propTypes
