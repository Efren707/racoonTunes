import React from 'react';
import {connect} from 'react-redux';
import {receiveCurrentSongComments, createNewComment, removeCurrentComment} from '../../actions/comment_actions';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount(){
        this.props.receiveComments()
    }

    deleteComment(){
        this.props.deleteComment(this.props.match.params.id)
    }

    render() {
        const {song} = this.props;
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }

}

const mSTP = (state) => {

    return {
        currentUser: state.session,
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => ({
    receiveComments: songId => dispatch(receiveCurrentSongComments(songId)),
    createComment: (comment) => dispatch(createNewComment(comment)),
    deleteComment: (commentId) => dispatch(removeCurrentComment(commentId))
})

const CommentsContainer = connect(mSTP, mDTP)(Comment);
export default CommentsContainer;