import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { LandingPage } from './LandingPage/LandingPage'
import { ProductPage } from './ProductPage/ProductPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  )
}

export default App
