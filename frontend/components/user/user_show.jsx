import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveOneUser } from '../../actions/user_actions';
import { receiveAllSongs } from '../../actions/song_actions';
import NavContainer from '../nav/nav';
import UserSongIndexItem from './user_show_songs';
import PlaybarContainer from '../playbar/playbar';

class UserShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ user: this.props.user, currentSong: null });
        this.playSong = this.playSong.bind(this);
        this.editPage = this.editPage.bind(this);
    }

    componentDidMount(){
        this.props.receiveAllSongs();
        this.props.receiveOneUser(this.props.currentUserId);
    }

    componentDidUpdate(){
        this.props.user;
    }

    playSong(song){
        this.setState({currentSong: song})
    }

    editPage(){
        this.props.history.push(`/users/edit/${this.props.currentUserId}`)
    }
    
    render(){
        if(!this.props.user) return null;
        if(!this.props.songs) return [];

        const { user, songs } = this.props;
        
        let userSongs = [];

        songs.map((song) => {
            if(song.author_id === this.props.currentUserId) {
                userSongs.push(song)
            }
        })

        // let playbar = userSongs[0] ? (<PlaybarContainer song={userSongs[0]}/>) : null; 
        let playbar = this.state.currentSong ? (<PlaybarContainer song={this.state.currentSong}/>) : null; 
        
        return(
            
            <div className="user-show-page">
                <NavContainer/>

                <div className="user-show">

                    <div className="user-show-info">
            
                        <img className="user-profile-pic" src={user.profile_pic}/>                    
            
                        <div className="user-name">
                            <h1>{user.name}</h1>
                           
                            <h2>{user.username}</h2>
                        </div>

                        <button className="user-edit-btn" onClick={this.editPage}>Edit Profile</button>

                    </div>

                    <div className="user-songs">

                        <ul>
                            {
                                userSongs.map((song, index) => <UserSongIndexItem onClick={this.playSong} song={song} user={user} index={index} key={song.id} />)
                            }
                        </ul>

                    </div>

                    
                </div>
                
                <div className="show-page-playbar">

                </div>
                {playbar}
                
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    return{
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session,
        currentUserId: state.session.id,
        songs: Object.values(state.entities.songs)
    }   

}

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    receiveOneUser: user => dispatch(receiveOneUser(user))
})

const UserShowContainer = connect(mSTP, mDTP)(UserShow);
export default UserShowContainer;

