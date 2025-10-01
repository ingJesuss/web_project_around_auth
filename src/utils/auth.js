const BASE_URL = "https://se-register-api.en.tripleten-services.com/v1";

const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } 
    return Promise.reject(`Error: ${res.status}`);
  
};

//registro
export const register = ( email, password ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(_checkResponse);
};

//login
export const authorize = ( email, password ) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(_checkResponse);
};

//verificar token

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
method: "GET",
headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
},
    }).then(_checkResponse);
}
