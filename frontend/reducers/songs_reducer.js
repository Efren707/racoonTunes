import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG } from "../actions/song_actions";

const songsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SONGS:
            action.songs;
        case RECEIVE_SONG:
            nextState[action.song.id] = action.song;
            debugger
            return nextState;
        case REMOVE_SONG:
            delete nextState[action.songId];
            return nextState;
        default:
            return oldState;
    }
}

export default songsReducer;