import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ProductItem } from './ProductItem'
import { Pagination } from './Pagination'

const Section = styled('section')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 480px) {
    justify-content: center;
  }
`

const propTypes = {
  currentProducts: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  paginateArrow: PropTypes.func,
  paginate: PropTypes.func,
  productsPerPage: PropTypes.number,
  totalProducts: PropTypes.number,
}

export const ProductsList = ({
  currentProducts,
  currentPage,
  paginateArrow,
  paginate,
  productsPerPage,
  totalProducts,
}) => {
  return (
    <Fragment>
      <Section>
        {currentProducts.map((product, index) => {
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
      {currentProducts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          paginateArrow={paginateArrow}
          paginate={paginate}
          productsPerPage={productsPerPage}
          totalProducts={totalProducts}
        />
      )}
    </Fragment>
  )
}

ProductsList.propTypes = propTypes
