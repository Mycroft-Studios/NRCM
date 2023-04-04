import "./SearchBar.css";
import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearchUpdate: Function;
}

const SearchBar = ({ onSearchUpdate }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    onSearchUpdate(search);
  }, [search, onSearchUpdate]);

  return (
    <div className="search-bar-container">
        <input className="search-bar-style" placeholder="Search Craftable Items..." onChange={handleSearch}/>
    </div>
  );
};

export default SearchBar;
