const baseUrl = 'localhost:3000';

const get = (url, params) => {
  return fetch(baseUrl.concat(url), {
    method: 'GET',
    body: JSON.stringify(params)
  })
  .then(response => response.json());
};

const post = (url, params) => {
  return fetch(baseUrl.concat(url), {
    method: 'POST',
    body: JSON.stringify(params)
  })
  .then(response => response.json());
};

export default {
  get, post
};
