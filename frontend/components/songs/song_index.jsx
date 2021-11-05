import React from "react";
import {connect} from "react-redux";
import {receiveCurrentSong} from '../../actions/song_actions';

class SongIndexItem extends React.Component {

    render() {
        const {post} = this.props;

        return(
            <li>
                <h1>{song.song_name}</h1>
                <h3>{song.description}</h3>
                <p>{song.description}</p>
            </li>
        )
    }
}


export default SongIndexItem;