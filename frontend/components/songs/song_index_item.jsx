import React from "react";
import {Link} from "react-router-dom";
import PlaybarContainer from "../playbar/playbar"

class SongIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.handleSongClick = this.handleSongClick.bind(this);
    }

    handleSongClick(){
        <PlaybarContainer playSong={this.props.song} />
    }

    render() {
        const {song} = this.props;

        return(

            <li className="dicover-item">
                <Link to={`/songs/${song.id}`}><img onClick={this.handleSongClick} className="song-index-photo" src={song.photo} alt="song photo cover" /></Link>
                <Link className="song-item-link" to={`/songs/${song.id}`}><h1>{song.song_name}</h1></Link>
            </li>            
            
        )
    }
}

export default SongIndexItem;