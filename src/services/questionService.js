import { get } from "../utils/request"

export const getListQuestion = async (topicId) => {
    const data = await get(`questions?topicId=${topicId}`);
    return data;
}
