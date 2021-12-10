import React from "react";
import {Link} from "react-router-dom";

class UserSongIndexItem extends React.Component {

    render() {
        const {song, user} = this.props;

        return(

            <div>
                <li className="user-item">
                    <Link to={`/songs/${song.id}`}><img className="user-song-index-photo" src={song.photo} alt="song photo cover" /></Link>
                    
                    <div className="user-song-item-name">
                        <h2>{user.username}</h2>
                        <h1>{song.song_name}</h1>
                        <audio controls className="song-show-audio" src={song.audio} type="audio/mpeg" />
                    </div>
                </li> 
            </div>
                       
            
        )
    }
}

export default UserSongIndexItem;