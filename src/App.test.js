import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'

it('should take a snapshot of App', () => {
  const { asFragment } = render(<App />)
  expect(asFragment(<App />)).toMatchSnapshot()
})

it('renders without crashing', () => {
  shallow(<App />)
})
