import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { receiveAllUsers, receiveOneUser } from '../../actions/user_actions';
import { receiveAllSongs } from '../../actions/song_actions';
import NavContainer from '../nav/nav';
import UserSongIndexItem from './user_show_songs';

class UserShow extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
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

                    </div>

                    <div className="user-songs">

                        <ul>
                            {
                                userSongs.map((song, index) => <UserSongIndexItem song={song} user={user} index={index} key={song.id} />)
                            }
                        </ul>

                    </div>


                </div>
                
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    return{
        user: state.entities.users[state.session.id],
        currentUser: state.session,
        currentUserId: state.session.id,
        songs: Object.values(state.entities.songs)
    }   
}

const mDTP = dispatch => ({
    receiveUser: userId => dispatch(receiveOneUser(userId)),
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

const UserShowContainer = connect(mSTP, mDTP)(UserShow);
export default UserShowContainer;

