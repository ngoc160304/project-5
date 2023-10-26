const DOMAIN = "http://localhost:4000/"
export const get = async (path) => {
    const response = await fetch(DOMAIN + path);
    const data =  await response.json();
    return data;
}
export const post = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    })
    const data =  await response.json();
    return data;
}
export const patch = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(option)
    })
    const data = await response.json();
    return data;
}