// const baseUrl = "http://localhost:3001";
const baseUrl = 'http://api.mesto.vstrechi.nomoredomains.work';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error(`Response is not ok with status ${res.status}`);
    }
}

export function register(username, password) {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            email: username
        })
    })
        .then((res) => checkResponse(res));
}

export function login(username, password) {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            email: username
        })
    })
        .then(res => checkResponse(res));
}

export function checkToken(jwt) {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    })
        .then(res => checkResponse(res));
}