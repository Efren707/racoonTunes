import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveCurrentSong, removeCurrentSong } from '../../actions/song_actions';
import NavContainer from '../nav/nav';
import CommentsContainer from '../comments/comments'
import CommentForm from '../comments/comment_form'

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
            edit = <button className="song-show-button" onClick={this.editPage}>Edit</button>
            deletebtn = <button className="song-show-button" onClick={this.deleteSong}>Delete</button>
        }
        
        return(
            
            <div className="show-page-background">
                <NavContainer/>
                <div className="show-page">

                    <div className="song-info">

                        <div className="song-text">

                            <div className="song-info-top">
                                <div className="song-title-genre">
                                    

                                    <h1>{song.song_name}</h1>
                                    <br/>           
                                    <h3>{song.genre}</h3>
                                    
                                </div>

                                <div className="song-page-buttons">
                                    {edit}
                                    <br />
                                    <br />
                                    {deletebtn}
                                </div>
                            </div>
                            
                            <div> 
                                <audio controls className="song-show-audio" src={song.audio} type="audio/mpeg" />
                            </div>  
                            
                        </div>

                        <div className="song-pic">
                            <img className="song-photo" src={song.photo} alt="song photo cover" />
                        </div>

                        
                    </div>
                
                    <div className="rest-of-show-page">
                       
                        <div className="song-show-comments">
                            <CommentForm song={song} user={currentUser} />
                            <br/>
                            <CommentsContainer song={song} />
                        </div>
                        
                        <div className="song-show-description">
                            <h3>Description</h3>
                            <br/>
                            <p>{song.description}</p>
                        </div>      

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

