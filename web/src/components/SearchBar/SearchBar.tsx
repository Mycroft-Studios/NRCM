import { useSearch } from "../../providers/SearchProvider";
import "./SearchBar.css";
import React, { useState, useEffect } from "react";


const SearchBar = () => {
  const { setSearchText } = useSearch();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <div className="search-bar-container">
        <input className="search-bar-style" placeholder="Search Craftable Items..." onChange={handleSearch}/>
    </div>
  );
};

export default SearchBar;
