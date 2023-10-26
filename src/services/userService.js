import { get, post } from "../utils/request"

export const getUser = async (email, password) => {
    const data = await get(`users?email=${email}&password=${password}`);
    return data;
}
export const createAccount = async (option) => {
    const data = await post("users", option);
    return data;
}