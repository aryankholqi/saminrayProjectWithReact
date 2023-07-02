export const logIn = (userName, password, token) => {
    return {
        type: "LOG_IN",
        userName,
        password,
        token
    }
}
export const logOut = (userName, passWord, token) => {
    return {
        type: "LOG_OUT",
        userName,
        passWord,
        token
    }
}
export const getUserID = (id) => {
    return {
        type: "GET_ID",
        id,
    }
}