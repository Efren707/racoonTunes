export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
        contentType: false,
        processData: false
    })
);

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
};