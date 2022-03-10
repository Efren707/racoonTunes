import React from 'react';
import { connect } from "react-redux";
import { receiveAllSongs } from '../../actions/song_actions';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    } 

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render(){
        if(!this.props.songs) return [];
        
        return (
            <div>
                <input type="text" className="nav-search-bar" placeholder="Coming soon..."></input>
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