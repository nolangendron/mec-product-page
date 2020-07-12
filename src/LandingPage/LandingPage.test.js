import React from 'react'
import { render } from '@testing-library/react'
import { LandingPage } from '../LandingPage/LandingPage'

it('should take a snapshot of LandingPage', () => {
  const { asFragment } = render(<LandingPage />)
  expect(asFragment(<LandingPage />)).toMatchSnapshot()
})
