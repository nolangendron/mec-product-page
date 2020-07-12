import React from 'react'
import { Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const BreadCrumbsNav = () => {
  return (
    <Breadcrumbs style={{ 'margin-left': '1em' }}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <h4>Products</h4>
    </Breadcrumbs>
  )
}
