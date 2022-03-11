import React from 'react';
import { connect } from "react-redux";
import { receiveAllSongs } from '../../actions/song_actions';
import SongDropDown from './songDropDown';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            songSearch: ""
        })
    } 

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    update(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }

    render(){
        if(!this.props.songs) return [];

        let searched = [];

        if(this.state.songSearch.length > 0){
            this.props.songs.forEach(song => {
                if((song.song_name.toUpperCase() === this.state.songSearch.toUpperCase()) || (song.song_name.toUpperCase().includes(this.state.songSearch.toUpperCase()))){
                    searched.push(song)
                }
            })
        }

        console.log(searched)

        return (
            <div>
                <input type="text" className="nav-search-bar" onChange={this.update('songSearch')} placeholder="Search"></input>
                <div className='filtered-songs'>
                    <ul>
                        {
                            searched.map((song, idx) => <SongDropDown song={song} key={idx}/>)
                        }
                    </ul>
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

const SearchBarContainer = connect(mSTP, mDTP)(SearchBar);

export default SearchBarContainer;