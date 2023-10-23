import React, { useState, useEffect } from "react";


const SearchBar = ({onSubmit,onClear}) => {
 const[search,setSearch] =useState('');
const handleSubmit =(event) =>{
  event.preventDefault();
  onSubmit(search)



}
  return (
    <form onSubmit={handleSubmit}  className="searchbar">
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search"></input>
      <button type="submit"> Search</button>
      <button onClick={onClear} > Clear Search</button>
    </form>
  );
};

export default SearchBar;
