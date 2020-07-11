import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField'

const SearchInputStyles = styled('div')``

export const SearchInput = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [persistedSearchQuery, setPersistedSearchQuery] = useState('')

  const handleQueryChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  }

  const handlePersistQuery = (name) => {
    setPersistedSearchQuery(name)
  }

  const handleOnFocus = () => {
    setPersistedSearchQuery('')
  }

  const handleResetSearchQuery = (e) => {
    setSearchQuery('')
  }

  return (
    <SearchInputStyles>
      <form onSubmit={(e) => handleSearch(e, searchQuery)}>
        <TextField
          id="outlined-full-width"
          label="Search"
          style={{ margin: 8 }}
          placeholder={
            persistedSearchQuery ? persistedSearchQuery : 'Search for product'
          }
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(e) => handleQueryChange(e)}
          value={searchQuery}
        />
      </form>
    </SearchInputStyles>
  )
}
