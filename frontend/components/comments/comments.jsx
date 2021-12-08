import React from 'react';
import {connect} from 'react-redux';
import {receiveAllComments, createNewComment, removeCurrentComment} from '../../actions/comment_actions';
import CommentItem from './comment_item';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({...this.props.comments})
    }

    componentDidMount(){
        this.props.receiveComments();
    }

    render() {
        if(!this.props.comments) return [];

        const {comments} = this.props;
        
        return (
            <div>
                <h1>hello</h1>
                
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    return {
        
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