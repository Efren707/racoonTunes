import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveAllSongs } from '../../actions/song_actions';

class Playbar extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render(){

        if(!this.props.songs) return [];
        
        const { songs } = this.props;

        let song = songs[0];
        if(!song) return null;


        return(
            <div className="music-container" id="music-container">
                <audio controls className="song-show-audio" src={song.audio} type="audio/mpeg" />
            </div>
        )
    }
}

const mSTP = state => {
    return {
        currentUser: state.session.id,
        songs: Object.values(state.entities.songs)
    }
}

const mDTP = dispatch => ({
    receiveSong: song => dispatch(receiveCurrentSong(song)),
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

const PlaybarContainer = connect(mSTP, mDTP)(Playbar);
export default PlaybarContainer;