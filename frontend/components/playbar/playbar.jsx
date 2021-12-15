import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveAllSongs } from '../../actions/song_actions';

class Playbar extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    

    render(){

        if(!this.props.songs) return [];
        
        const { songs, playSong } = this.props;

        let song = songs[0];
        if(!song) return null;

        console.log(playSong)
        return(
            <div className="music-container">
                <audio controls className="playbar-audio" src={song.audio} type="audio/mpeg" />
                <img className="playbar-photo" src={song.photo}/>
                <h4>{song.song_name}</h4>
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