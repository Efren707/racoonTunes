import React from 'react';
import {connect} from 'react-redux';
import { receiveAllSongs } from '../../actions/song_actions';
import SongIndexItem from '../songs/song_index_item';

class DiscoverPage extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render() {
        if(!this.props.songs) return [];
        
        const { songs } = this.props;
        
        let hotChart = [];

        
        
        
        return(
            <div className="discover-page-background">

                <div className="discover-page">
                    <br />
                    <h2>Charts: New & hot</h2>

                    <div className="discover-hot-chart">

                        <ul>
                            {
                                songs.slice(0, 5).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>
                    </div>

                    <br />

                    <h2>Charts: New & hot</h2>

                    <div className="discover-hot-chart">

                        <ul>
                            {
                                songs.slice(0, 5).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>
                    </div>

                </div>

            </div>
            
        )
    }
}

const mSTP = (state, ownProps) => ({
    songs: Object.values(state.entities.songs),
})

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

const DiscoverContainer = connect(mSTP, mDTP)(DiscoverPage);
export default DiscoverContainer;