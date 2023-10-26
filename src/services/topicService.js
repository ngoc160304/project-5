import { get } from "../utils/request"

export const getListTopic =  async () => {
    const data = await get("topics");
    return data;
}
export const getTopicById = async (id) => {
    const data = await get(`topics/${id}`);
    return data;
}
