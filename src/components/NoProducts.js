import React from 'react'

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
