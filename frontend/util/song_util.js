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
        data: { songId }
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
    return $.ajax({
        url: `/api/songs`,
        method: 'POST',
        data: song,
        contentType: false,
        processData: false
    })
}

export const updateSong = song => {
    debugger
    
    return $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'POST',
        data: {song},
        contentType: false,
        processData: false
    })
}

export const deleteSong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE',
        data: {songId}
    })
}