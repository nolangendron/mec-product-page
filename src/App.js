import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'
import { ProductPage } from './ProductPage/ProductPage'
import { makeApiCall } from '../src/utils/apiCall'

function App() {
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
      setCurrentPage(1)
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
    <Router>
      <Switch>
        <Route path="/products">
          <ProductPage
            searchQuery={searchQuery}
            currentSearch={currentSearch}
            handleQueryChange={handleQueryChange}
            handleSearch={handleSearch}
            products={products}
            currentProducts={currentProducts}
            paginate={paginate}
            paginateArrow={paginateArrow}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />
        </Route>
        <Route path="/" exact>
          <LandingPage
            searchQuery={searchQuery}
            handleQueryChange={handleQueryChange}
            handleSearch={handleSearch}
            products={products}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
