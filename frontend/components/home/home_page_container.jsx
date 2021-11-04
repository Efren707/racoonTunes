import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {createNewSong} from '../../actions/song_actions'

class HomePageContainer extends React.Component {

    render() {

        
        if (this.props.pathname){
            return (

                <div className="home-page">
                    <img className="main-picture" src={window.homeMainPic}></img>
                </div>
            )
        } else {
            return null;
        }
        
    }
}


const mSTP = (state, ownProps) => ({
    currentUser: state.session.id,
    pathname: ownProps.location.pathname === '/'
})

const mDTP = dispatch => ({
    createSong: song => dispatch(createNewSong(song))
})

export default withRouter(connect(mSTP, mDTP)(HomePageContainer))