import React from "react";
import {connect} from 'react-redux';
import { removeCurrentComment } from '../../actions/comment_actions';

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(){
        this.setState();
        this.props.removeComment(this.props.comment);
    }

    render() {
        if(!this.props.comment) {return null}
        const {comment, currentUser} = this.props;

        let deleteButton;

        if(comment.author_id === currentUser.id){
            deleteButton = <button className="delete-btn" onClick={this.deleteComment}>🗑️</button>
        }

        return(

            <li className="comment-item">
                <div className="comment-item-content">
                    <img className="comment-item-user-pic" src={currentUser.profile_pic} />
                    <div>
                        <h4>{currentUser.username}</h4>
                        <p>{comment.body}</p>
                    </div>
                </div>
                
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