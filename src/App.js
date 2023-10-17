import React,{useState,useEffect} from "react";
import axios from "axios";
import SongLibrary from "./Components/SongLibrary/SongLibrary";
import './App.css';
import PostSong from "./Components/PostSong/PostSong";


function App() {
 const [ songs,setSongs] = useState([]);
 useEffect(()=> {
  getAllSongs();
 },[]);

 async function getAllSongs(){
  const response = await axios.get('https://localhost:7221/api/Songs');
  setSongs(response.data);
  console.log(songs);
 }
 








  return (
    <div >
      <PostSong/>
      
        <SongLibrary parentEntries ={songs}/>
      
     
    </div>
  );
}

export default App;
