import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import {
  Header,
  SearchDetails,
  ProductsList,
  Pagination,
  BreadCrumbsNav,
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
  toggleFetchSuccess,
}) => {
  useEffect(() => {
    toggleFetchSuccess()
  }, [toggleFetchSuccess])

  return (
    <ProductPageStyles>
      <Header
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
      />
      <section className="product-list-container">
        <BreadCrumbsNav />
        <SearchDetails
          currentSearch={currentSearch}
          numberOfProducts={products.length}
        />
        <ProductsList products={currentProducts} />
        {products.length > 0 && (
          <Pagination
            currentPage={currentPage}
            paginateArrow={paginateArrow}
            paginate={paginate}
            productPerPage={productsPerPage}
            totalProducts={products.length}
          />
        )}
      </section>
    </ProductPageStyles>
  )
}
