import React from 'react'
import styled from '@emotion/styled'
import { ProductItem } from './ProductItem'

const Section = styled('section')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 480px) {
    justify-content: center;
  }
`
export const ProductsList = ({ products }) => {
  return (
    <Section>
      {products.map((product, index) => {
        const { name, default_image_urls, web_url } = product
        const { main_image_url } = default_image_urls
        return (
          <ProductItem
            key={index}
            name={name}
            img={main_image_url}
            web_url={web_url}
          />
        )
      })}
    </Section>
  )
}
