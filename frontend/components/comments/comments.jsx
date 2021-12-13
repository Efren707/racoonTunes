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

    componentDidUpdate(){
        this.props.receiveComments();
    }

    render() {
        if(!this.props.comments) return [];

        const {song, comments} = this.props;
        
        let songComments = [];

        comments.map((comm) => {
            if(song.id === comm.song_id){
                songComments.push(comm)
            }
        })

        songComments = songComments.reverse();

        return (
            <div className="comments-div">
                
                <ul>
                    {
                        songComments.map((comment, idx) => <CommentItem comment={comment} index={idx} key={comment.id} />)
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
})

const CommentsContainer = connect(mSTP, mDTP)(Comment);
export default CommentsContainer;