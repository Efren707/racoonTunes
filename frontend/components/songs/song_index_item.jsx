import React from "react";
import {Link} from "react-router-dom";

class SongIndexItem extends React.Component {

    render() {
        const {song} = this.props;

        return(

            <li className="dicover-item">
                <img className="song-index-photo" src={song.photo} alt="song photo cover" />

                <Link className="song-item-link" to={`/songs/${song.id}`}><h1>{song.song_name}</h1></Link>
            </li>            
            
        )
    }
}

export default SongIndexItem;