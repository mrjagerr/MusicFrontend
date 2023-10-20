import axios from "axios";
import React, { useState, useEffect } from "react";


const PostSong = (props) => {





    const[title, setTitle] = useState('');
    const[artist,setArtist] =useState( '');
    const[album, setAlbum] =useState ('');
    const[releaseDate,setReleaseDate] =useState('');
    const[genre,setGenre] =useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong={
            title:title,
            artist:artist,
            album:album,
            releaseDate:releaseDate,
            genre:genre

        };
        
       
        props.addNewSong(newSong);
    }



  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)} id='title' />
      <label>Artist</label>
      <input type="text" value={artist} onChange={(event)=> setArtist(event.target.value)} id='artist'/>
      <label>Album</label>
      <input type="text" value={album} onChange={(event)=> setAlbum(event.target.value)} id='album'/>
      <label>Release Date</label>
      <input type="date" value={releaseDate} onChange={(event)=> setReleaseDate(event.target.value)} id='releaseDate'/>
      <label>Genre</label>
      <input type="text" value={genre} onChange={(event)=> setGenre(event.target.value)} id='genre' />
      <button type="submit"> Add Song </button>
    </form>
  );
};

export default PostSong;
