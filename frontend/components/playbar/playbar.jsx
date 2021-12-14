import React from 'react';
import { connect } from "react-redux";
import { receiveCurrentSong, receiveAllSongs } from '../../actions/song_actions';

class Playbar extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render(){

        if(!this.props.songs) return [];
        
        const { songs } = this.props;

        let song = songs[0];


        return(
            <div className="music-container" id="music-container">
                <div className="music-info">
                    <h4 id="title"></h4>
                    <div className="progress-container" id="progress-container">
                    <div className="progress" id="progress"></div>
                    </div>
                </div>

                <audio  id="audio"></audio>

                <div className="img-container">
                    <img  alt="music-cover" id="cover" />
                </div>

                <div className="navigation">
                    <button id="prev" className="action-btn">
                    <i className="fas fa-backward"></i>
                    </button>
                    <button id="play" className="action-btn action-btn-big">
                    <i className="fas fa-play"></i>
                    </button>
                    <button id="next" className="action-btn">
                    <i className="fas fa-forward"></i>
                    </button>
                </div>
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