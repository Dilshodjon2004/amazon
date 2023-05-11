import React from "react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./SearchBar.css";
const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  return (
    <>
      <div className="search-bar__wrapper">
        <select
          id="category"
          className="category"
          style={
            selectedOption.length <= 7
              ? { width: `${selectedOption.length * 14}px` }
              : { width: `${selectedOption.length * 10}px` }
          }
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="clothes">Clothes</option>
          <option value="smartphones">Smartphones</option>
          <option value="watches">Watches</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
        </select>
        <input
          type="search"
          id="search"
          className="search"
          placeholder="Search"
        />
        <div className="search-icon">
          <BiSearchAlt2 />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
