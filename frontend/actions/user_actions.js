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

export const receiveUser = () => dispatch => {
    return UserApiUtil.receiveUser()
    .then(user => dispatch(receiveUser(user)))
}