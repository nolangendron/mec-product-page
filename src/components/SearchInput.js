import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const SearchInputStyles = styled('div')`
  height: 50px;
  margin: 1em;
  margin-left: 0;
`
const styles = {
  root: {
    '& .Mui-focused': {
      color: 'white',
    },
    background: '#333',
    width: 400,
  },
  label: {
    color: 'white',
  },
}

const SearchInput = ({ handleSearch, classes }) => {
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
          className={classes.root}
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="standard-basic"
          label="I'm looking for"
          onChange={(e) => handleQueryChange(e)}
          value={searchQuery}
        />
      </form>
    </SearchInputStyles>
  )
}

export default withStyles(styles)(SearchInput)
