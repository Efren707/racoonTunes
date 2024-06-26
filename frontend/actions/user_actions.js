import * as UserApiUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveAllUsers = () => dispatch => {
    return UserApiUtil.receiveUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const receiveOneUser = userId => dispatch => {
    return UserApiUtil.receiveUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const updateCurrentUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
    .then(user => { return dispatch(receiveUser(user)) })
}