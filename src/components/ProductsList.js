import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductsList = ({ products }) => {
  return (
    <section>
      {products.map((product, index) => {
        const { name, default_image_urls } = product
        const { main_image_url } = default_image_urls
        return <ProductItem key={index} name={name} img={main_image_url} />
      })}
    </section>
  )
}
