


export const authLoginService = async (payload) => {

    const url = getUrl('/auth');
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const authRegisterService = async (payload) => {

    console.log(payload, 'en el service');

    const url = getUrl('/auth/register');
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
};

export const getToken = async () => {

    const token = localStorage.getItem('token') || '';
    const url = getUrl('/auth/renew');
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};



const getUrl = (url) => {
    const URL = `${process.env.REACT_APP_API_URL}${url}`
    return URL;
};