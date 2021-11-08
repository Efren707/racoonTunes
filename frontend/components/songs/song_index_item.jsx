import React from "react";
import {connect} from "react-redux";
import {receiveCurrentSong} from '../../actions/song_actions';

class SongIndexItem extends React.Component {

    render() {
        const {song} = this.props;

        return(
            
                <li className="dicover-hot-chart-item">
                    <img className="song-photo" src={song.photo} alt="song photo cover" />
                    <h1>{song.song_name}</h1>
                </li>
                
            
        )
    }
}


export default SongIndexItem;