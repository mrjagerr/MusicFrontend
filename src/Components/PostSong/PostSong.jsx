const PostSong = (props) => {
  return (
    <form>
      <label>Title</label>
      <input type="text" />
      <label>Artist</label>
      <input type="text" />
      <label>Album</label>
      <input type="text" />
      <label>Release Date</label>
      <input type="date" />
      <label>Genre</label>
      <input type="text" />
      <button> Add Song </button>
    </form>
  );
};

export default PostSong;
