import * as CommentApiUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const receiveCurrentSongComments = songId => dispatch => {
    return CommentApiUtil.receiveSongComments(songId)
    .then(comms => dispatch(receiveComment(comms)))
}

export const receiveAllComments = () => dispatch => {
    return CommentApiUtil.receiveComments()
    .then(songs => dispatch(receiveComments(songs)))
}

export const receiveCurrentComment = commentId => dispatch => {
    return CommentApiUtil.receiveComment(commentId)
    .then(comm => dispatch(receiveComment(comm)))
}

export const createNewComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment)
    .then(comm => dispatch(receiveComment(comm)))
}

export const removeCurrentComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
    .then(comm => dispatch(removeComment(comm.id)))
}