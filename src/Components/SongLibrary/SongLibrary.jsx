const SongLibrary = ({ songs, onDelete }) => {
  return (
    <table className="musictable">
      {songs.map((entry) => {
        return (
          <tbody id={entry.id}>
            <tr>
              <th >Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
            <tr>
              <td  className="sectionsize">{entry.title}</td>
              <td  className="sectionsize" >{entry.artist}</td>
              <td  className="sectionsize">{entry.album}</td>
              <td  className="sectionsize">{entry.releaseDate}</td>
              <td  className="sectionsize">{entry.genre}</td>
              <td className="sectionsize" className="buttonlocation">
                <button onClick={() => onDelete(entry.id)}> Delete</button>
                <button> Edit PlaceHolder</button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default SongLibrary;
