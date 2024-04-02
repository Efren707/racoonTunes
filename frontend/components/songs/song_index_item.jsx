import React from "react";
import {Link} from "react-router-dom";

class SongIndexItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {song} = this.props;

        return(

            <li className="dicover-item">
                <img onClick={() => this.props.onClick(song)} className="song-index-photo" src={song.photo} alt="song photo cover" />
                <Link className="song-item-link" to={`/songs/${song.id}`}>
                    <h1>{song.song_name.length < 17 ? song.song_name : song.song_name.slice(0,16) + "..." }</h1>
                </Link>
            </li>            
            
        )
    }
}

export default SongIndexItem;