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
    console.log(songs);
  }

  return (
    <div>
      <PostSong />
      <SearchBar />
      <SongLibrary parentEntries={songs} />
      <button onClick={() => getAllSongs()}> Get All Songs </button>
    </div>
  );
}

export default App;
