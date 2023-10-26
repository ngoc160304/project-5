export const checkLogin = (token) => {
    return {
        type: "CHECK_LOGIN",
        token: token
    }
}
export const logout = () => {
    return {
        type: "LOG_OUT"
    }
}