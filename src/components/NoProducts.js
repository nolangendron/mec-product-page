import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  currentSearch: PropTypes.string,
}

export const NoProducts = ({ currentSearch }) => {
  return (
    <div>
      <p>
        We have thousands of products, just not one matching {currentSearch}.
        Try another search!
      </p>
    </div>
  )
}

NoProducts.propTypes = propTypes
