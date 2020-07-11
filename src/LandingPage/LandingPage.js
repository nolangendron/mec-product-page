import React, { useState } from 'react'
import { SearchInput } from '../components/SearchInput'
import { ProductsList } from '../components/ProductsList'
import { makeApiCall } from '../utils/apiCall'

export const LandingPage = () => {
  const [products, setProducts] = useState([])

  const handleSearch = (e, searchQuery) => {
    e.preventDefault()
    makeApiCall(searchQuery).then((results) => {
      const data = results
      console.log(data)
      setProducts(data)
    })
  }

  return <SearchInput handleSearch={handleSearch} />
}
