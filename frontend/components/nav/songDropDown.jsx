import React from 'react';

class SongDropDown extends React.Component {

    constructor(props) {
        super(props);
    } 

    render(){
        
        const {song} = this.props;

        return (
            <div className='search-result'>
                <h3 className='search-result-title'>&nbsp;&nbsp;<i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;{song.song_name.toLowerCase()}</h3>
            </div>
        )
    }
}



export default SongDropDown;