import React from 'react'
import { render } from '@testing-library/react'
import { ProductPage } from './ProductPage'

it('should take a snapshot of LandingPage', () => {
  const { asFragment } = render(<ProductPage />)
  expect(asFragment(<ProductPage />)).toMatchSnapshot()
})
