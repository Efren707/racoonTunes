import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveCurrentSong, removeCurrentSong } from '../../actions/song_actions';
import NavContainer from '../nav/nav';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
        this.editPage = this.editPage.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }

    componentDidMount(){
        this.props.receiveCurrentSong(this.props.match.params.id)
    }

    editPage(){
        this.props.history.push(`/songs/edit/${this.props.song.id}`)
    }

    deleteSong(){
        this.props.deleteSong(this.props.match.params.id)
        .then(this.props.history.push('/discover'))
    }

    render(){
        
        if(!this.props.song) return null;
        if(!this.props.currentUser) return null;
        const {song, currentUser} = this.props;

        let edit;
        let deletebtn;

        if (this.props.currentUserId === song.author_id){
            edit = <button onClick={this.editPage}>Edit</button>
            deletebtn = <button onClick={this.deleteSong}>Delete</button>
        }
        
        return(
            
            <div className="show-page-background">
                <NavContainer/>
                <div className="show-page">


                    <div className="song-info">

                        <img className="song-photo" src={song.photo} alt="song photo cover" />
                        <h1>{song.song_name}</h1>
                        <h3>{song.genre}</h3>
                        <br />
                        <p>{song.description}</p>
                        <p>{currentUser.name}</p>
                        <br />
                        <audio controls src={song.audio} type="audio/mpeg" />
                        <br />
                        <br />
                        {edit}&nbsp;
                        {deletebtn}
                    </div>

                </div>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    return{
        song: state.entities.songs[ownProps.match.params.id],
        currentUser: state.session,
        currentUserId: state.session.id
    }   
}

const mDTP = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    deleteSong: songId => dispatch(removeCurrentSong(songId))
})

const SongShowContainer = connect(mSTP, mDTP)(SongShow);
export default SongShowContainer;

