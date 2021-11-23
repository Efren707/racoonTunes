import React from "react";

class SongHomeIndexItem extends React.Component {

    render() {
        const {song} = this.props;

        return(

            <li className="home-item">
                <img className="home-song-index-photo" src={song.photo} alt="song photo cover" />
                <h1>{song.song_name}</h1>
            </li>            
            
        )
    }
}

export default SongHomeIndexItem;