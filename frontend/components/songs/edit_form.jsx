import React from "react";
import { connect } from "react-redux";
import { updateCurrentSong, receiveCurrentSong } from '../../actions/song_actions';
import NavContainer from "../nav/nav";

class EditSongForm extends React.Component {

    constructor(props) {
        super(props);  
        console.log(this.props.song);
        this.state = ({...this.props.song, id: this.props.match.params.id});
        this.handleSongSubmit = this.handleSongSubmit.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
    }

    componentDidMount(){
        this.props.receiveCurrentSong(this.props.match.params.id)
        .then(payload => this.setState(payload.song))        
    }

    update(field){
        return e => (
            this.setState({[field]: e.currentTarget.value})
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
        formData.append('song[id]', this.state.id);
        formData.append('song[song_name]', this.state.song_name);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[author_id]', this.props.currentUser);
        formData.append('song[photo]', this.state.photoFile);
        
        formData.append('song[audio]', this.state.audioFile);
        console.log(this.state.audio, "audio");
        console.log(this.state, "state");
        console.log(this.state.photo, "photo");

        

        this.props.updateCurrentSong(formData)
        .then(song => history.push(`/songs/${song.song.id}`))

    }

    render(){
        
        if(!this.props.song) return null;
        
        return(
            <div className="edit-page-background">
                <NavContainer/>
                <div className="edit-page">
                <form className="edit-form">
                    <br/>
                    <br/>
                    <h1>Update song</h1>
                    <br/>
                    <label><span>Title *</span>&nbsp;
                        <input value={this.state.song_name} onChange={this.update("song_name")}></input>
                    </label>

                        <br />
                    
                    <label><span>Genre *</span>&nbsp;
                        <select onChange={this.update('genre')} defaultValue={this.state.genre}>
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
                    <br />
                    <input type='file' onChange={this.handlePhoto} accept="image/png, image/jpeg" />
                    <br />
                    <br />

                    <label>MP3 File *</label>
                    <br />
                    <input type='file' onChange={this.handleAudio} accept="audio/mp3" />
                    <br />
                    <br />
                    <br />

                    <button  className="edit-button" onClick={this.handleSongSubmit}>Update Song</button>
                    <br/>
                </form>
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    
    return {
        song: state.entities.songs[ownProps.match.params.id],
        currentUser: state.session.id,
        formType: 'edit'
    }
    
}

const mDTP = dispatch => ({
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    updateCurrentSong: song => dispatch(updateCurrentSong(song))
})

const EditSongFormContainer = connect(mSTP, mDTP)(EditSongForm)

export default EditSongFormContainer