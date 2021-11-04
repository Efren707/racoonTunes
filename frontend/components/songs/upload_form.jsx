import React from "react";
import {connect} from "react-redux";
import {Router } from "react-router-dom";
import { createNewSong } from '../../actions/song_actions';

class UploadSongForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            song_name: "",
            genre: "",
            description: "",
            author_id: this.props.currentUser
        }
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        
    }

    componentDidMount(){
        const { createSong } = this.props;
        createSong
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleSongSubmit(e){
        e.preventDefault()
        this.props.createSong(this.state)
        // .then(song => this.props.history.push(`/api/songs/${song.song.id}`))
    
    }

    render() {

        return (
            <form>
                <br />
                <br />
                <br />
                <br />
                <h1>Create your own song</h1>
                <br/>

                <label>Name
                    <input type="text" value={this.state.song_name} onChange={this.update('song_name')} />
                </label>

                <br/>

                <label>Genre
                    <input type="text" value={this.state.genre} onChange={this.update('genre')} />
                </label>

                <br/>

                <label>Description
                    <textarea value={this.state.description} onChange={this.update('description')} />
                </label>
                <br/>
                <br/>

                <button onClick={this.handleSongSubmit}>Create Song</button>
            </form>
        )
    }
}


const mSTP = state => {
    return {
        currentUser: state.session.id,
        formType: 'upload'
    }
}

const mDTP = dispatch => ({
    createSong: song => dispatch(createNewSong(song))
})

const UploadSongFormContainer = connect(mSTP, mDTP)(UploadSongForm)

export default UploadSongFormContainer