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
            author_id: this.props.currentUser,
            photoFile: null,
            audioFile: null
        }
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
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

    handlePhoto(e){
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    handleAudio(e) {
        this.setState({ audioFile: e.currentTarget.files[0] })
    }

    handleSongSubmit(e){
        const {history} = this.props;
        
        e.preventDefault()
        const formData = new FormData();
        formData.append('song[song_name]', this.state.song_name);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[author_id]', this.props.currentUser);
        formData.append('song[photo]', this.state.photoFile);
        formData.append('song[audio]', this.state.audioFile);
        
        this.props.createSong(formData)
        .then(song => history.push(`/api/songs/${song.song.id}`))
    
    }

    render() {

        return (
            <div className="upload-page">
                <div className="upload-form">
                    <form>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>Create your own song</h1>
                        <br />

                        <label><span>Name</span>
                            <input type="text" value={this.state.song_name} onChange={this.update('song_name')} />
                        </label>

                        <br />
                        <br />

                        <label>Genre
                            <input type="text" value={this.state.genre} onChange={this.update('genre')} />
                        </label>

                        <br />
                        <br />

                        <label>Description
                            <textarea value={this.state.description} onChange={this.update('description')} />
                        </label>
                        <br />
                        <br />

                        <label>Photo</label>
                        <br/>
                        <input type='file' onChange={this.handlePhoto} accept="image/png, image/jpeg" />
                        <br />
                        <br />

                        <label>Song mp3</label>
                        <br />
                        <input type='file' onChange={this.handleAudio} accept="audio/mp3" />
                        <br />
                        <br />

                        <button onClick={this.handleSongSubmit}>Create Song</button>
                    </form>
                </div>
            </div>
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