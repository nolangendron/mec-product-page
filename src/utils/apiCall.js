export const makeApiCall = async (searchQuery) => {
  const queryString = `https://www.mec.ca/api/v1/products/search?keywords=${searchQuery}`
  try {
    const response = await fetch(queryString, {
      method: 'get',
    })
    const response_1 = await response.json()
    console.log(response_1)
    return response_1
  } catch (error) {
    console.log(error)
    return []
  }
}
