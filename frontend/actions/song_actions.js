import * as SongApiUtil from '../util/song_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
})

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
})

export const receiveCurrentUserSongs = userId => dispatch => {
    return SongApiUtil.receiveUserSongs(userId)
    .then(songs => dispatch(receiveSongs(songs)))
}

export const receiveAllSongs = () => dispatch => {
    return SongApiUtil.receiveSongs()
    .then(songs => dispatch(receiveSongs(songs)))
}

export const receiveCurrentSong = songId => dispatch => {
    return SongApiUtil.receiveSong(songId)
    .then(song => dispatch(receiveSong(song)))
}

export const createNewSong = song => dispatch => {
    return SongApiUtil.createSong(song)
    .then(song => dispatch(receiveSong(song)))
}

export const updateCurrentSong = song => dispatch => {
    
    return SongApiUtil.updateSong(song)
    .then(song => { return dispatch(receiveSong(song)) })
}

export const removeCurrentSong = songId => dispatch => {
    return SongApiUtil.deleteSong(songId)
    .then(song => dispatch(removeSong(song.id)))
}