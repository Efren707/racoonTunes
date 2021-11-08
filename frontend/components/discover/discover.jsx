import React from 'react';
import {connect} from 'react-redux';
import { receiveAllSongs } from '../../actions/song_actions';

class DiscoverPage extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.receiveAllSongs();
    }

    render() {
        const { songs } = this.props;
        
        debugger
        return(
            <div className="discover-page">

                <div className="discover-main">

                    <h1>DiscoverPage</h1>
                    
                </div>
                
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    songs: Object.values(state.entities.songs),
    pathname: ownProps.location.pathname === '/discover'
})

const mDTP = dispatch => ({
    receiveAllSongs: () => dispatch(receiveAllSongs())
})

const DiscoverContainer = connect(mSTP, mDTP)(DiscoverPage);
export default DiscoverContainer;