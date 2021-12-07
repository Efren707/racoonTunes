import React from 'react';
import {connect} from 'react-redux';
import {receiveAllComments, createNewComment, removeCurrentComment} from '../../actions/comment_actions';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount(){
        this.props.receiveComments();
    }

    deleteComment(){
        this.props.deleteComment(this.props.match.params.id)
    }

    render() {

        const {comms} = this.props;
        
        return (
            <div>
                <h1>hello</h1>
                {comms}
            </div>
        )
    }

}

const mSTP = (state) => {

    return {
        currentUser: state.session,
        currentUserId: state.session.id,
        comments: state.comments
    }
}

const mDTP = dispatch => ({
    receiveComments: () => dispatch(receiveAllComments()),
    createComment: (comment) => dispatch(createNewComment(comment)),
    deleteComment: (commentId) => dispatch(removeCurrentComment(commentId))
})

const CommentsContainer = connect(mSTP, mDTP)(Comment);
export default CommentsContainer;