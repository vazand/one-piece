import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchItems({search,setSearch}) {
  return (
    <form
      id="searchForm"
      className="p-2 rounded-md bg-slate-400 flex justify-evenly m-auto "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        id="search"
              placeholder="Search Items"
              value={search}
              role="searchBox"
              onChange={(e)=> {setSearch(e.target.value)}}
      />
      <label htmlFor="search" className="p-2">
        <FaSearch/>
      </label>
    </form>
  );
}

export default SearchItems;
