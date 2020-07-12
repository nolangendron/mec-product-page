import React, { useState, Fragment } from 'react'
import { Header } from '../components/Header'
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
      <Header handleSearch={handleSearch} />
      <ProductsList products={products} />
    </Fragment>
  )
}
