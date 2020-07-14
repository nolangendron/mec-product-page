import React from 'react'
import { Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const BreadCrumbsNav = () => {
  return (
    <Breadcrumbs style={{ marginLeft: '1em' }}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>Products</p>
    </Breadcrumbs>
  )
}
