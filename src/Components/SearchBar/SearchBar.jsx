import React, {useState,useEffect} from "react";
import axios from "axios";







 const SearchBar= (props) => {
    const [song, setSong] = useState({
        title: "",
       artist: "",
        album: "",
        genre: "",

        results: [],
      });
      useEffect(() => {const timeoutId = setTimeout(() => {
        const fetch = async () => {
            try {
              const res = await got.get(`/${song.title, song.artist,song.album,song.genre}`);
              setSong({ ...data, results: res.data });
            } catch (err) {
              console.error(err);
            }
          };
          fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
        // ...
      }, [song.title, song.artist,song.album,song.genre]);
      return;
    };





 const handleChange = (value) => {
    value.preventDefault();
    setSearchInput(value)
  
  };
  return ( 

    <input type="text" onChange={handleChange} ></input>
   
 );

      
  












  
export default SearchBar;