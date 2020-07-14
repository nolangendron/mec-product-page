import React, { useEffect } from 'react'
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
    margin-left: 60px;
    margin-right: 60px;
  }
`
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
