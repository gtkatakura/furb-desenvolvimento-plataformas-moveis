const _ = require('lodash');
const fetch = require('node-fetch');

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const headersNameAuthentication = ['access-token', 'token-type', 'client', 'expiry', 'uid'];

const create = (baseUrl, opts) => {
  const headersAuthentication = Object.assign({}, headers, opts);

  const updateHeaders = headers => {
    for (let headerName of headersNameAuthentication) {
      if (headers.has(headerName)) {
        headersAuthentication[headerName] = headers.get(headerName);
      }
    }
  };

  const request = async (method, uri, data) => {
    const response = await fetch(`${baseUrl}${uri}`, {
      method: method,
      body: JSON.stringify(data),
      headers: headersAuthentication,
    });

    updateHeaders(response.headers);

    if (method !== 'DELETE') {
      return await response.json();
    }
  }

  const get = _.partial(request, 'GET');
  const post = _.partial(request, 'POST');
  const put = _.partial(request, 'PUT');
  const destroy = _.partial(request, 'DELETE');

  const withRoute = route => create(`${baseUrl}/${route}`, headersAuthentication);

  return { get, post, put, destroy, withRoute };
};

module.exports = { create };
