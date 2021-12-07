import React from "react";

class CommentItem extends React.Component {

    render() {
        const {comment} = this.props;

        return(

            <li>
                <p>{comment.body}</p>
            </li>            
            
        )
    }
}

export default CommentItem;