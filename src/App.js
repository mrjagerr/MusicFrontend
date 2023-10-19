import React, { useState, useEffect } from "react";
import axios from "axios";
import SongLibrary from "./Components/SongLibrary/SongLibrary";
import PostSong from "./Components/PostSong/PostSong";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("https://localhost:7221/api/Songs");
    setSongs(response.data);
  }
  console.log(songs);

  async function getSongs(entry) {
    
    let userinput = entry;
    let fiilteredSongs = songs.filter(function (songs) {
      if (songs.title.includes(userinput)) {
        return true;
      }
      if (songs.artist.includes(userinput)) {
        return true;
      }
      if (songs.album.includes(userinput)) {
        return true;
      }
      if (songs.releaseDate.includes(userinput)) {
        return true;
      }
      if (songs.genre.includes(userinput)) {
        return true;
      }
    });

    setSongs(fiilteredSongs);
    console.log(fiilteredSongs);
  }

  function addNewSong(entry){
    let tempSong =[entry,...songs];
    setSongs(tempSong);

  }


 

  

  return (
    <div>
      <PostSong  addNewSong={addNewSong} />
      <SearchBar onSubmit={getSongs} onClear={getAllSongs} />
      <SongLibrary songs={songs} />
    </div>
  );
}
export default App;
