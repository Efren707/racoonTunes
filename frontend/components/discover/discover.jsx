import React from 'react';
import {connect} from 'react-redux';
import { receiveAllSongs } from '../../actions/song_actions';
import { receiveAllUsers } from '../../actions/user_actions';
import SongIndexItem from '../songs/song_index_item';
import UserIndexItem from '../user/user_index_item';
import NavContainer from '../nav/nav';
import PlaybarContainer from '../playbar/playbar';

class DiscoverPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ currentSong: null });
        this.playSong = this.playSong.bind(this);
    }

    componentDidMount(){
        this.props.receiveAllUsers();
        this.props.receiveAllSongs();
    }

    playSong(song){
        this.setState({currentSong: song})
    }

    render() {
        if(!this.props.songs) return [];
        if(!this.props.users) return [];
        
        const { songs, users, currentUser } = this.props;
        
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

        let usersArr = [];

        users.map((user) => {
            if(user.id !== currentUser){
                usersArr.push(user)
            }
        })

        let playbar = this.state.currentSong ? (<PlaybarContainer song={this.state.currentSong}/>) : null; 

                
        return(
            <div className="discover-page-background">

                <NavContainer />

                <div className="discover-page">
                    
                    <div className="discover-songs">
                        <br />
                        <h2>Charts: New & hot</h2>

                        <div className="discover-chart">

                            <ul className="discover-songs-ul">
                                {
                                    songs.slice(Math.max(songs.length - 5, 0)).map((song, index) => <SongIndexItem onClick={this.playSong} song={song} index={index} key={song.id} />)
                                }
                            </ul>
                        </div>

                        <br />

                        <h2>Charts: Top 50</h2>

                        <div className="discover-chart">

                            <ul>
                                {
                                    songs.slice(0, 5).map((song, index) => <SongIndexItem onClick={this.playSong} song={song} index={index} key={song.id} />)
                                }
                            </ul>

                        </div>
                        <br/>

                        <h2>Rap Corner</h2>

                        <div className="discover-chart">

                            <ul>
                                {
                                    rapSongs.slice(0, 5).map((song, index) => <SongIndexItem onClick={this.playSong} song={song} index={index} key={song.id} />)
                                }
                            </ul>

                        </div>
                        
                        <br />

                        <h2>Rock & Metal</h2>

                        <div className="discover-chart-last">

                            <ul>
                                {
                                    rockSongs.slice(0, 5).map((song, index) => <SongIndexItem onClick={this.playSong} song={song} index={index} key={song.id} />)
                                }
                            </ul>

                        </div>

                        {playbar}
                        
                    </div>

                    

                    <div className="discover-users">
                        <br/>
            
                        <h2>Artist you should checkout</h2>
                        <br/>
                        <br/>
                        

                        <ul>
                                {
                                    usersArr.slice(0, 4).map((user, index) => <UserIndexItem user={user} index={index} key={user.id} />)
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
    users: Object.values(state.entities.users),
    currentUser: state.session.id,
})

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs()),
    receiveAllUsers: () => dispatch(receiveAllUsers())
})

const DiscoverContainer = connect(mSTP, mDTP)(DiscoverPage);
export default DiscoverContainer;