export const receiveUsers = () => {
    return $.ajax({
        url: `/api/users`,
        method: 'GET'
    })
}

export const receiveUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
        data: { userId }
    })
}

