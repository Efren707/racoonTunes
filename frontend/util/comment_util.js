export const receiveComments = () => {
    return $.ajax({
        url: `/api/comments`,
        method: 'GET'
    })
}

export const receiveComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'GET',
        data: { commentId }
    })
}

export const receiveSongComments = songId => {
    return $.ajax({
        url: `/api/songs/${songId}/comments`,
        method: 'GET',
        data: {songId}
    })
}

export const createComment = comment => {
    return $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: {comment},
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE',
        data: {commentId}
    })
}