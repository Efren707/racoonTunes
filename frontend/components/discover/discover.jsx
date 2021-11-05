import React from 'react';
import {connect} from 'react-redux';
import { receiveAllSongs } from '../../actions/song_actions';

class DiscoverPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveAllSongs();
    }

    render() {
        
        
        
        if(this.props.songs === []) return null;
        const {songs} = this.props;
        
        
        
        return(
            <div className="discover-page">

                <div className="discover-main">

                    <h1>Discover page</h1>

                    <ul>
                        {
                            songs.map(song => (<SongIndexItem song={song} />))
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}

const mSTP = (state) => ({
    songs: Object.values(state.entities.songs)
})

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

const DiscoverContainer = connect(mSTP, mDTP)(DiscoverPage);
export default DiscoverContainer;