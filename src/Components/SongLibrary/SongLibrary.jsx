const SongLibrary = (props) => {
  return (
    <table>
      {props.parentEntries.map((entry) => {
        return (
          <tbody>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
            <tr>
              <td>{entry.title}</td>
              <td>{entry.artist}</td>
              <td>{entry.album}</td>
              <td>{entry.releaseDate}</td>
              <td>{entry.genre}</td>
              <td>
                <button> Delete placeholder</button>
              </td>
              <td>
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
