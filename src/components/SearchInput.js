import React from 'react'
import styled from '@emotion/styled'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const SearchInputStyles = styled('div')`
  height: 50px;
  width: 100%;
  margin: 1em;
  margin-left: 0;
`
const styles = {
  root: {
    '& .Mui-focused': {
      color: 'white',
    },
    background: '#333',
    width: '40%',
    minWidth: '200px',
  },
  label: {
    color: 'white',
    'padding-left': '10px',
  },
}

const SearchInput = ({
  searchQuery,
  handleQueryChange,
  handleSearch,
  classes,
}) => {
  return (
    <SearchInputStyles>
      <form onSubmit={handleSearch}>
        <TextField
          className={classes.root}
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
          }}
          id="standard-basic"
          label="I'm looking for"
          onChange={handleQueryChange}
          value={searchQuery}
        />
      </form>
    </SearchInputStyles>
  )
}

export default withStyles(styles)(SearchInput)
