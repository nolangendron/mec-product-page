import React, { useState, Fragment } from 'react'
import { SearchInput } from '../components/SearchInput'
import { ProductsList } from '../components/ProductsList'
import { makeApiCall } from '../utils/apiCall'

export const LandingPage = () => {
  const [products, setProducts] = useState([])

  const handleSearch = (e, searchQuery) => {
    e.preventDefault()
    makeApiCall(searchQuery).then((results) => {
      const data = results
      const { products } = data
      console.log(data)
      setProducts(products)
    })
  }

  return (
    <Fragment>
      <SearchInput handleSearch={handleSearch} />
      <ProductsList products={products} />
    </Fragment>
  )
}
