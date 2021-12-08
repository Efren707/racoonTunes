import React from "react";
import {connect} from 'react-redux';
import { removeCurrentComment } from '../../actions/comment_actions';

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentWillUnmount(){
        this.props.comment
    }

    deleteComment(){
        this.props.removeComment(this.props.comment)
        
    }

    render() {
        if(!this.props.comment) {return null}
        const {comment, currentUser} = this.props;

        let deleteButton;

        if(comment.author_id === currentUser.id){
            deleteButton = <button onClick={this.deleteComment}>delete</button>
        }

        return(

            <li>
                <p>{comment.body}</p>
                {deleteButton}
            </li>            
            
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    removeComment: comment => dispatch(removeCurrentComment(comment.id))
})

const CommentItem = connect(mSTP, mDTP)(CommentIndexItem)
export default CommentItem;