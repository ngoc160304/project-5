import { get, post } from "../utils/request"

export const createAnswer = async (option) => {
    const data = await post("answers", option);
    return data;
}
export const getAnswerByUser = async (userId, topicId) => {
    const data = await get(`answers?topicId=${topicId}&userId=${userId}`);
    return data;
}
export const getAnswerById = async (id) => {
    const data = await get(`answers?id=${id}`);
    return data;
}
export const getAnswerByUserId = async (userId) => {
    const data = await get(`answers?userId=${userId}`);
    return data;
} 