import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveCurrentUserSongs, removeCurrentSong } from '../../actions/song_actions';

class SongShow extends React.Component {

    componentDidMount(){
        this.props.receiveCurrentSong(this.props.match.params.songId)
    }

    render(){
        const {song} = this.props;

        return(
            <div>

                <br />

                <h1>show page</h1>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.session,
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
})

const SongShowContainer = connect(mSTP, mDTP)(SongShow);
export default SongShowContainer;

