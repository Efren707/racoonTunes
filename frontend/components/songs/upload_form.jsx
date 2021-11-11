import React from "react";
import {connect} from "react-redux";
import {Router } from "react-router-dom";
import { createNewSong } from '../../actions/song_actions';
import NavContainer from '../nav/nav';

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
        .then(song => history.push(`/songs/${song.song.id}`))
    
    }

    render() {
        
        return (
            <div className="upload-page">
                <NavContainer/>
                <div className="upload-form">
                    <form>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <h1>Create your own song </h1>
                            <p>* Required fields</p>
                        </div>
                        
                        <br />

                        <label><span>Title *</span>&nbsp;
                            <input type="text" value={this.state.song_name} onChange={this.update('song_name')} />
                        </label>

                        <br />
                        <br />

                        <label><span>Genre *</span>&nbsp;
                            <select onChange={this.update('genre')} value={this.state.genre}>
                                <option value="Alternative Rock">Alternative Rock</option>
                                <option value="Ambient">Ambient</option>
                                <option value="Classical">Classical</option>
                                <option value="Country">Country</option>
                                <option value="Dance & EDM">Dance & EDM</option>
                                <option value="Dancehall">Dancehall</option>
                                <option value="Deep House">Deep House</option>
                                <option value="Disco">Disco</option>
                                <option value="Drum and Bass">Drum and Bass</option>
                                <option value="Dubstep">Dubstep</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Folk & Singer-Songwriter">Folk & Singer-Songwriter</option>
                                <option value="Hip-Hop & Rap">Hip-Hop & Rap</option>
                                <option value="House">House</option>
                                <option value="Indie">Indie</option>
                                <option value="Jazz & Blues">Jazz & Blues</option>
                                <option value="Latin">Latin</option>
                                <option value="Metal">Metal</option>
                                <option value="Piano">Piano</option>
                                <option value="Pop">Pop</option>
                                <option value="R&B & Soul">R&B & Soul</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Reggaeton">Reggaeton</option>
                                <option value="Rock">Rock</option>
                                <option value="Soundtrack">Soundtrack</option>
                                <option value="Techno">Techno</option>
                                <option value="Trance">Trance</option>
                                <option value="Trap">Trap</option>
                                <option value="Triphop">Triphop</option>
                                <option value="World">World</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label><span>Description</span>&nbsp;
                            <textarea value={this.state.description} onChange={this.update('description')} />
                        </label>
                        <br />
                        <br />

                        <label>Photo *</label>
                        <br/>
                        <input type='file' onChange={this.handlePhoto} accept="image/png, image/jpeg" />
                        <br />
                        <br />

                        <label>MP3 File *</label>
                        <br />
                        <input type='file' onChange={this.handleAudio} accept="audio/mp3" />
                        <br />
                        <br />

                        <button className="upload-button" onClick={this.handleSongSubmit}>Create Song</button>
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