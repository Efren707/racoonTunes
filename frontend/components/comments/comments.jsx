import React from 'react';
import {connect} from 'react-redux';
import {receiveAllComments, createNewComment, removeCurrentComment} from '../../actions/comment_actions';
import CommentItem from './comment_item';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.receiveComments();
    }

    render() {
        if(!this.props.comments) return [];

        const {songs, comments} = this.props;
        
        return (
            <div>
                
                <ul>
                    {
                        comments.map((comment, idx) => <CommentItem comment={comment} index={idx} key={comment.id} />)
                    }
                </ul>
            
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments),
        currentUser: state.session.id,
    }
}

const mDTP = dispatch => ({
    receiveComments: () => dispatch(receiveAllComments()),
    createComment: comm => dispatch(createNewComment(comm)),
    deleteComment: commentId => dispatch(removeCurrentComment(commentId))
})

const CommentsContainer = connect(mSTP, mDTP)(Comment);
export default CommentsContainer;