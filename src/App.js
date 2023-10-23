import React, { useState, useEffect } from "react";
import axios from "axios";
import SongLibrary from "./Components/SongLibrary/SongLibrary";
import PostSong from "./Components/PostSong/PostSong";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Header from "./Components/Header/Header";

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

  async function addNewSong(entry) {
    let songCheck = entry;
    let tempSong = [entry, ...songs];

    if (songCheck !== null) {
      alert("Please fill out all info.");
      getAllSongs();
    }

    if (songCheck.title === null) {
      alert("Please fill out all info to add a song.");
      getAllSongs();
    }
    if (songCheck.artist === null) {
      alert("Please fill out all info to add a song.");
      getAllSongs();
    }
    if (songCheck.album === null) {
      alert("Please fill out all info  to add a song.");
      getAllSongs();
    }
    if (songCheck.releaseDate === null) {
      alert("Please fill out all info  to add a song.");
      getAllSongs();
    }
    if (songCheck.genre === null) {
      alert("Please fill out all info  to add a song.");
      getAllSongs();
    }

    setSongs(tempSong);
  }

  async function deleteSong(id) {
    let songToDelete = await axios.delete(
      `https://localhost:7221/api/Songs/${id}`
    );
    getAllSongs();
  }

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <PostSong addNewSong={addNewSong} />
      </div>
      <div>
        <SearchBar onSubmit={getSongs} onClear={getAllSongs} />
      </div>
      <div>
        <SongLibrary songs={songs} onDelete={deleteSong} />
      </div>
    </div>
  );
}
export default App;
