const fetch = require('node-fetch');

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const create = (url, opts) => {
  const headersAuthentication = Object.assign({}, headers, opts);
  const headersNameAuthentication = ['access-token', 'token-type', 'client', 'expiry', 'uid'];

  const updateHeaders = headers => {
    for (let headerName of headersNameAuthentication) {
      if (headers.has(headerName)) {
        headersAuthentication[headerName] = headers.get(headerName);
      }
    }
  };

  const post = async (resourceName, data) => {
    const response = await fetch(`${url}/${resourceName}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headersAuthentication,
    });

    updateHeaders(response.headers);
    return await response.json();
  };

  return { post };
};

module.exports = { create };
