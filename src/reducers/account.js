import { getCookie } from "../helpers/cookie";

export const accountReducer = (state = getCookie("token"), action) => {
    switch (action.type) {
        case "CHECK_LOGIN":
            return action.token;
        case "LOG_OUT":
            return "";
        default:
            return state;
    }
}