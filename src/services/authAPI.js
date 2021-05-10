


export const authLoginService = async (payload) => {

    const url = getUrl('/auth');
    console.log(url);
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};




const getUrl = (url) => {
    const URL = `${process.env.REACT_APP_API_URL}${url}`
    return URL;
};