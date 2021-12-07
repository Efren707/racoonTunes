import React from "react";
import {Link} from "react-router-dom";

class SongIndexItem extends React.Component {

    render() {
        const {song} = this.props;

        return(

            <li className="dicover-item">
                <Link to={`/songs/${song.id}`}><img className="song-index-photo" src={song.photo} alt="song photo cover" /></Link>

                <h1>{song.song_name}</h1>
            </li>            
            
        )
    }
}

export default SongIndexItem;