import React from 'react'
import { shallow } from 'enzyme'
import { SearchInput } from '../components/SearchInput'

describe('form', () => {
  it('renders', () => {
    shallow(<SearchInput />)
  })

  it('should call onChange prop', () => {
    const handleQueryChangeMock = jest.fn()
    const wrapper = shallow(
      <SearchInput handleQueryChange={handleQueryChangeMock} />
    )
    const mockEvent = { target: { value: 'bikes' } }
    wrapper.find('input').simulate('change', mockEvent)

    expect(handleQueryChangeMock).toHaveBeenCalledTimes(1)
    expect(handleQueryChangeMock).toHaveBeenCalledWith(mockEvent)
  })

  it('should call onSubmit prop', () => {
    const handleSearchMock = jest.fn()
    const wrapper = shallow(<SearchInput handleSearch={handleSearchMock} />)
    const mockEvent = { target: { value: 'This is just for test' } }
    wrapper.find('form').simulate('submit', mockEvent)

    expect(handleSearchMock).toHaveBeenCalledTimes(1)
    expect(handleSearchMock).toHaveBeenCalledWith(mockEvent)
  })
})

// it('calls onSubmit function when form is submitted', () => {
//   const handleSearch = jest.fn()
//   const wrapper = shallow(<SearchInput onSubmit={handleSearch} />)

//   const form = wrapper.find('form')
//   form.simulate('submit', { preventDefault: () => { } })

//   expect(handleSearch).toHaveBeenCalledTimes(1)
//   // expect(handleSearch).toHaveBeenCalledWith('bikes')

// })
