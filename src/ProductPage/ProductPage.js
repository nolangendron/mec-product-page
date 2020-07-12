import React, { Fragment } from 'react'
import { Header, SearchDetails, ProductsList, Pagination } from '../components'

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
}) => {
  return (
    <Fragment>
      <Header
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
      />
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
    </Fragment>
  )
}
