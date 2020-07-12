import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'
import { ProductPage } from './ProductPage/ProductPage'
import { makeApiCall } from '../src/utils/apiCall'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const [fetchSuccess, setFetchSuccess] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const toggleFetchSuccess = () => {
    setFetchSuccess(false)
  }
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
      setFetchSuccess(true)
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
            toggleFetchSuccess={toggleFetchSuccess}
          />
        </Route>
        <Route path="/" exact>
          <LandingPage
            searchQuery={searchQuery}
            handleQueryChange={handleQueryChange}
            handleSearch={handleSearch}
            fetchSuccess={fetchSuccess}
          />
        </Route>
        <Route render={() => <h2>Not Found</h2>} />
      </Switch>
    </Router>
  )
}

export default App
