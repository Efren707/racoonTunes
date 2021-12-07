import React from 'react';
import {connect} from 'react-redux';
import {receiveAllComments, createNewComment, removeCurrentComment} from '../../actions/comment_actions';
import CommentItem from './comment_item';

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
        if(!this.props.comments) return [];
        const {comments} = this.props;
        
        return (
            <div>
                <h1>hello</h1>
                <ul>{
                    comments.map((comment, index) => <CommentItem comment={comment} index={index} key={comment.id}/>)
                }</ul>
            </div>
        )
    }

}

const mSTP = (state) => {

    return {
        currentUser: state.session,
        currentUserId: state.session.id,
        comments: Object.values(state.entities.comments)
    }
}

const mDTP = dispatch => ({
    receiveComments: () => dispatch(receiveAllComments()),
    createComment: (comment) => dispatch(createNewComment(comment)),
    deleteComment: (commentId) => dispatch(removeCurrentComment(commentId))
})

const CommentsContainer = connect(mSTP, mDTP)(Comment);
export default CommentsContainer;