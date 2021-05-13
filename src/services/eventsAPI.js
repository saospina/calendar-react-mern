const baseUrl = process.env.REACT_APP_API_URL;



export const fetchWithToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {

        const response = await fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });

        const payload = await response.json();

        return payload;
    } else {

        const response = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });

        const payload = await response.json();
        return payload
    }
}