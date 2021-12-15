import React from 'react';
import {connect} from 'react-redux';
import { receiveAllSongs } from '../../actions/song_actions';
import SongIndexItem from '../songs/song_index_item';
import NavContainer from '../nav/nav';
import PlaybarContainer from '../playbar/playbar';

class DiscoverPage extends React.Component {

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render() {
        if(!this.props.songs) return [];
        
        const { songs } = this.props;
        
        let randbSongs = [];
        let rapSongs = [];
        let rockSongs = [];
        let popSongs = [];

        songs.map((song) => {
            switch (song.genre) {
                case "Hip-Hop & Rap":
                    rapSongs.push(song);
                    break;
                case "R&B & Soul":
                    randbSongs.push(song);
                    break;
                case "Rock":
                    rockSongs.push(song);
                    break;
                case "Pop":
                    popSongs.push(song);
                    break;
            }
        })

        
        
        return(
            <div className="discover-page-background">

                <NavContainer />

                <div className="discover-page">
                    <br />
                    <h2>Charts: New & hot</h2>

                    <div className="discover-chart">

                        <ul>
                            {
                                songs.slice(Math.max(songs.length - 5, 0)).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>
                    </div>

                    <br />

                    <h2>Charts: Top 50</h2>

                    <div className="discover-chart">

                        <ul>
                            {
                                songs.slice(0, 5).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>

                    </div>
                     <br/>

                    <h2>Rap Corner</h2>

                    <div className="discover-chart">

                        <ul>
                            {
                                rapSongs.slice(0, 5).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>

                    </div>
                    
                    <br />

                    <h2>Rock & Metal</h2>

                    <div className="discover-chart">

                        <ul>
                            {
                                rockSongs.slice(0, 5).map((song, index) => <SongIndexItem song={song} index={index} key={song.id} />)
                            }
                        </ul>

                        <br/>

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