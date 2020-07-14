import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'
import { ProductPage } from './ProductPage/ProductPage'
import { makeApiCall } from '../src/utils/apiCall'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')
  const [fetchSuccess, setFetchSuccess] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const toggleRedirect = () => {
    setRedirect(false)
  }

  const handleQueryChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.length === 0) {
      return
    } else {
      setProducts([])
      makeApiCall(searchQuery).then((results) => {
        if (results.hasOwnProperty('products')) {
          setFetchSuccess('success')
          const data = results
          const { products } = data
          setProducts(products)
          setCurrentPage(1)
        } else {
          setFetchSuccess('fail')
        }
      })
      setCurrentSearch(searchQuery)
      setRedirect(true)
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateArrow = (arrow) => {
    arrow === 'forward'
      ? setCurrentPage((prevState) => prevState + 1)
      : setCurrentPage((prevState) => prevState - 1)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <Router>
      <Switch>
        <Route path={`/products`}>
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
            fetchSuccess={fetchSuccess}
            clearSearch={clearSearch}
            totalProducts={products.length}
            toggleRedirect={toggleRedirect}
          />
        </Route>
        <Route path="/" exact>
          <LandingPage
            currentSearch={currentSearch}
            searchQuery={searchQuery}
            handleQueryChange={handleQueryChange}
            handleSearch={handleSearch}
            redirect={redirect}
            clearSearch={clearSearch}
          />
        </Route>
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </Router>
  )
}

export default App
