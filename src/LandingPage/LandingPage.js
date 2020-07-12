import React, { useState, Fragment } from 'react'
import { Header, SearchDetails, ProductsList, Pagination } from '../components'
import { makeApiCall } from '../utils/apiCall'

export const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handleQueryChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    makeApiCall(searchQuery).then((results) => {
      const data = results
      const { products } = data
      console.log(data)
      setProducts(products)
      setCurrentSearch(searchQuery)
    })
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateArrow = (arrow) => {
    arrow === 'forward'
      ? setCurrentPage((prevState) => prevState + 1)
      : setCurrentPage((prevState) => prevState - 1)
  }

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
          paginateArrow={paginateArrow}
          paginate={paginate}
          productPerPage={productsPerPage}
          totalProducts={products.length}
        />
      )}
    </Fragment>
  )
}
