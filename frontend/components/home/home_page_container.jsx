import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {createNewSong, receiveAllSongs} from '../../actions/song_actions';
import SongIndexItem from "../songs/song_index_item";
import GreetingContainer from '../greeting/greeting_container';

class HomePageContainer extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render() {

        if(!this.props.songs) return [];        
        
        const { songs } = this.props;
        
        if (this.props.pathname){
            return (

                <div className="home-page">
                    
                    
                   <img className="main-picture" src={window.homeMainPic}></img>
                    
                   <div className="home-page-content">
                        <h2>Hear what’s trending for free in the RacoonTunes community</h2>
                   </div>

                   <div className="discover-chart">

                        <ul>
                            {
                                songs.slice(Math.max(songs.length - 5, 0)).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>
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
    songs: Object.values(state.entities.songs),
    pathname: ownProps.location.pathname === '/'
})

const mDTP = dispatch => ({
    createSong: song => dispatch(createNewSong(song)),
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

export default withRouter(connect(mSTP, mDTP)(HomePageContainer))