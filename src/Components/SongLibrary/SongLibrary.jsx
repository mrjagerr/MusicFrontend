



const SongLibrary = (props) => {
    return (  <table> 
        
        <tbody>
        {props.parentEntries.map((entry)=>{
             return(
 
                <table>
                   <tr> 
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>DeletePlaceholder</th>
                    <th>Edit Placeholder</th>
                   </tr>
                   <tr>
                    <td>{entry.title}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.album}</td>
                    <td>{entry.releaseDate}</td>
                    <td>{entry.genre}</td>
                    <tc><button> Delete placeholder</button></tc>
                    <tc><button> Edit PlaceHolder</button></tc>
                   </tr>
                    
                </table>
 
             
             );
           })}
        </tbody>
       
 
         
      
         </table>  );
}
 
export default SongLibrary;