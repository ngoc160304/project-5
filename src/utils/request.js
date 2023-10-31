const DOMAIN = "https://data-project-5.vercel.app/"
export const get = async (path) => {
    const response = await fetch(DOMAIN + path);
    const data =  await response.json();
    return data;
}
export const post = async (path, option) => {
    const response = await fetch(DOMAIN + path, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(option), // body data type must match "Content-Type" header
    });
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