import React, { useState, Fragment } from 'react'
import { Header } from '../components/Header'
import { SearchDetails } from '../components/SearchDetails'
import { ProductsList } from '../components/ProductsList'
import { makeApiCall } from '../utils/apiCall'

export const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const [products, setProducts] = useState([])

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
      <ProductsList products={products} />
    </Fragment>
  )
}
