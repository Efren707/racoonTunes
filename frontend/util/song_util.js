export const receiveSongs = () => {
    return $.ajax({
        url: `/api/songs`,
        method: 'GET'
    })
}

export const receiveSong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'GET',
        data: {songId}
    })
}

export const receiveUserSongs = userId => {
    return $.ajax({
        url: `/api/users/${userId}/songs`,
        method: 'GET',
        data: {userId}
    })
}

export const createSong = song => {
    debugger
    return $.ajax({
        url: `/api/songs`,
        method: 'POST',
        data: {song}
    })
}

export const updateSong = song => {
    return $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'PATCH',
        data: {song}
    })
}

export const deleteSong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE',
        data: {songId}
    })
}