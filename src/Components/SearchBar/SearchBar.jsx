import React, {useState,useEffect} from "react";
import axios from "axios";
import { getByTitle } from "@testing-library/react";






 const SearchBar= (props) => {
   

const[songs,setSongs] = useState();




async function getSongs(){
  const response = await axios.get('https://localhost:7221/api/Songs/1');
  setSongs(response.data);
  setSongs.filter((title) => {
    return Object.values(title).join('').includes(songs)
})
setSongs(response.data);
console.log(response)
 
 }
 

      







  return ( 
<div>
<input type="text"  ></input>
<button onClick={()=>getSongs()}> Search</button>
</div>
   
   
   
 );
  };



  
export default SearchBar;