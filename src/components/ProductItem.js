import React from 'react'

export const ProductItem = ({ name, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
    </div>
  )
}
