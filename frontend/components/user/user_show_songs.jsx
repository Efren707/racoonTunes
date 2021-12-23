import React from "react";
import {Link} from "react-router-dom";

class UserSongIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {currentSong: this.props.song}
        this.playbar = false;
    }

    render() {
        const {song, user} = this.props;

        return(

            <div>
                <li className="user-item">
                    <img className="user-song-index-photo" onClick={() => this.props.onClick(song)} src={song.photo} alt="song photo cover" />
                    
                    <div className="user-song-item-name">
                        <div>
                            <h2>{user.username}</h2>
                            <Link to={`/songs/${song.id}`} className="user-song-title"><h1>{song.song_name}</h1></Link>
                        </div>
                        
                    </div>
                </li> 

                
            </div>
                                   
        )
    }
}

export default UserSongIndexItem;