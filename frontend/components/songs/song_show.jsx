import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveCurrentUserSongs, removeCurrentSong } from '../../actions/song_actions';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.receiveCurrentSong(this.props.match.params.id)
    }

    render(){
        if(!this.props.song) return null;
        if(!this.props.currentUser) return null;
        const {song, currentUser} = this.props;
        
        return(
            
            <div className="show-page">

                <div className="song-info">
                    
                    
                    
                    
                    <img className="song-photo" src={song.photo} alt="song photo cover"/>
                    <h1>{song.song_name}</h1>
                    <h3>{song.genre}</h3>
                    <br/>
                    <p>{song.description}</p>
                    <p>{currentUser.name}</p>
                    <br/>
                    <audio controls src={song.audio} type="audio/mpeg"/>
                </div>
                        
            </div>
        )
    }

}

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.id],
    currentUser: state.session,
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
})

const SongShowContainer = connect(mSTP, mDTP)(SongShow);
export default SongShowContainer;

