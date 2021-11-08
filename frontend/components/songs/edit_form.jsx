import React from "react";
import { connect } from "react-redux";

import { createNewSong } from '../../actions/song_actions';

class EditSongForm extends React.Component {

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

    componentDidMount() {
        const { createSong } = this.props;
        createSong
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handlePhoto(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    handleAudio(e) {
        this.setState({ audioFile: e.currentTarget.files[0] })
    }

    handleSongSubmit(e) {
        const { history } = this.props;

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
                            <select onChange={this.update('genre')}>
                                <option selected disabled value="None">None</option>
                                <option value={this.state.genre = "Alternative Rock"}>Alternative Rock</option>
                                <option value={this.state.genre = "Ambient"}>Ambient</option>
                                <option value={this.state.genre = "Classical"}>Classical</option>
                                <option value={this.state.genre = "Country"}>Country</option>
                                <option value={this.state.genre = "Dance & EDM"}>Dance & EDM</option>
                                <option value={this.state.genre = "Dancehall"}>Dancehall</option>
                                <option value={this.state.genre = "Deep House"}>Deep House</option>
                                <option value={this.state.genre = "Disco"}>Disco</option>
                                <option value={this.state.genre = "Drum and Bass"}>Drum and Bass</option>
                                <option value={this.state.genre = "Dubstep"}>Dubstep</option>
                                <option value={this.state.genre = "Electronic"}>Electronic</option>
                                <option value={this.state.genre = "Folk & Singer-Songwriter"}>Folk & Singer-Songwriter</option>
                                <option value={this.state.genre = "Hip-Hop & Rap"}>Hip-Hop & Rap</option>
                                <option value={this.state.genre = "House"}>House</option>
                                <option value={this.state.genre = "Indie"}>Indie</option>
                                <option value={this.state.genre = "Jazz & Blues"}>Jazz & Blues</option>
                                <option value={this.state.genre = "Latin"}>Latin</option>
                                <option value={this.state.genre = "Metal"}>Metal</option>
                                <option value={this.state.genre = "Piano"}>Piano</option>
                                <option value={this.state.genre = "Pop"}>Pop</option>
                                <option value={this.state.genre = "R&B & Soul"}>R&B & Soul</option>
                                <option value={this.state.genre = "Reggae"}>Reggae</option>
                                <option value={this.state.genre = "Reggaeton"}>Reggaeton</option>
                                <option value={this.state.genre = "Rock"}>Rock</option>
                                <option value={this.state.genre = "Soundtrack"}>Soundtrack</option>
                                <option value={this.state.genre = "Techno"}>Techno</option>
                                <option value={this.state.genre = "Trance"}>Trance</option>
                                <option value={this.state.genre = "Trap"}>Trap</option>
                                <option value={this.state.genre = "Triphop"}>Triphop</option>
                                <option value={this.state.genre = "World"}>World</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label><span>Description</span>&nbsp;
                            <textarea value={this.state.description} onChange={this.update('description')} />
                        </label>
                        <br />
                        <br />

                        <label>Photo</label>
                        <br />
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

const EditSongFormContainer = connect(mSTP, mDTP)(EditSongForm)

export default EditSongFormContainer