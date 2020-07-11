import React, { useState } from "react";
import styled from "@emotion/styled";

const SearchInputStyles = styled("div")``;

export const SearchInput = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [persistedSearchQuery, setPersistedSearchQuery] = useState("");

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handlePersistQuery = (name) => {
    setPersistedSearchQuery(name);
  };

  const handleOnFocus = () => {
    setPersistedSearchQuery("");
  };

  const handleResetSearchQuery = (e) => {
    setSearchQuery("");
  };

  return (
    <SearchInputStyles>
      <form onSubmit={(e) => handleSearch(e, searchQuery)}>
        <input
          onChange={(e) => handleQueryChange(e)}
          value={searchQuery}
          placeholder={
            persistedSearchQuery ? persistedSearchQuery : "Search for product"
          }
          onFocus={handleOnFocus}
        />
      </form>
    </SearchInputStyles>
  );
};
