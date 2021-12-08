import React from 'react';
import {connect} from 'react-redux';
import { createNewComment } from '../../actions/comment_actions';

class CreateCommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            song_id: this.props.song.id,
            author_id: this.props.currentUser.id
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount(){
        const {createNewComment} = this.props;
        createNewComment
    }

    update(field){
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleCommentSubmit(e){
        e.preventDefault();
        
        this.props.createNewComment(this.state)
    }

    render() {
        return (
            <div>
                
                <form>
                    <input type="text" value={this.state.body} onChange={this.update('body')} />
                </form>

                <button onClick={this.handleCommentSubmit}>Post</button>
            
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    createNewComment: comment => dispatch(createNewComment(comment))
})

const CommentForm = connect(mSTP, mDTP)(CreateCommentForm);
export default CommentForm;