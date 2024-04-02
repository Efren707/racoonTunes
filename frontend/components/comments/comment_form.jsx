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
        this.removeOldComment = this.removeOldComment.bind(this);
    }

    componentDidMount(){
        const {createNewComment} = this.props;
        createNewComment
    }

    removeOldComment(){
        this.setState({body: ""})
    }

    update(field){
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleCommentSubmit(e){
        e.preventDefault();
        this.props.createNewComment(this.state).then(this.removeOldComment())
    }

    render() {
        return (
            <div className="comment-form">
                
                <form onSubmit={this.handleCommentSubmit}>
                    <input className="comment-form-input" placeholder="Write a comment" type="text" value={this.state.body} onChange={this.update('body')} />
                </form>

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