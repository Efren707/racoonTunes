import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveAllSongs } from '../../actions/song_actions';

class Playbar extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.song;
    }

    // componentDidUpdate(){
    //     this.props.receiveSong(this.props.song.id);
    //     console.log("here")
    // }

    render(){

        if(!this.props.songs) return [];
        
        const { songs } = this.props;
        
        return(
            <div className="music-container">
                <audio controls className="playbar-audio" src={this.props.song.audio} type="audio/mpeg" />
                <img className="playbar-photo" src={this.props.song.photo}/>
                <h4>{this.props.song.song_name}</h4>
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