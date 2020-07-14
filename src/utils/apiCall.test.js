import { makeApiCall } from './apiCall'

it('returns an object that contains an array named products when passed a string', async () => {
  const obj = await makeApiCall('bikes')
  const products = obj.products
  expect(obj).toHaveProperty('products')
  expect(products).toEqual(expect.any(Array))
})

it('returns an object that contains a property total_product_count that equal 0 when passed a unmatched string', async () => {
  const obj = await makeApiCall('bbbbbb')
  const total_product_count = obj.total_product_count
  expect(obj).toHaveProperty('total_product_count')
  expect(total_product_count).toBe(0)
})

// TODO write mock functions to not have to rely on api data
