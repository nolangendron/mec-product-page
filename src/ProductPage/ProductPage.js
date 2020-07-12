import React, { useEffect, Fragment } from 'react'
import {
  Header,
  SearchDetails,
  ProductsList,
  Pagination,
  BreadCrumbsNav,
} from '../components'

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
    <Fragment>
      <Header
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        handleSearch={handleSearch}
      />
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
    </Fragment>
  )
}
