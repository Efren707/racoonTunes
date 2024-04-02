import React from 'react';
import {Link} from "react-router-dom";

class SongDropDown extends React.Component {

    constructor(props) {
        super(props);
    } 

    render(){
        
        const {song} = this.props;

        return (
            <Link className="search-result-link" to={`/songs/${song.id}`}><div className='search-result'>
                <h3 className='search-result-title'>&nbsp;&nbsp;<i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;{song.song_name.toLowerCase()}</h3>
            </div></Link>
        )
    }
}



export default SongDropDown;