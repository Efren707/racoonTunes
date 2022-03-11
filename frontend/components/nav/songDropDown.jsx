import React from 'react';

class SongDropDown extends React.Component {

    constructor(props) {
        super(props);
    } 

    render(){
        
        const {song} = this.props;

        return (
            <div>
                <h3>{song.song_name}</h3>
            </div>
        )
    }
}



export default SongDropDown;