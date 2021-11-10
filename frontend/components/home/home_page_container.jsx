import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {createNewSong} from '../../actions/song_actions'
import GreetingContainer from '../greeting/greeting_container';

class HomePageContainer extends React.Component {

    render() {

        
        if (this.props.pathname){
            return (

                <div className="home-page">
                    
                    
                   <img className="main-picture" src={window.homeMainPic}></img>
                    
                   <div className="home-page-content">
                        <h2>Hear what’s trending for free in the RacoonTunes community</h2>
                   </div>

                    <img className="main-picture" src={window.homeIphonePic}></img>
                    <img className="main-picture" src={window.homeSecondPic}></img>
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