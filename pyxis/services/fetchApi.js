import _ from 'lodash';

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
    const responseAsJson = await response.json();

    if (response.status >= 400 && response.status <= 499) {
      const message = _.join(_.get(responseAsJson, 'errors'), '\n') || responseAsJson;
      throw new Error(message);
    }

    return responseAsJson;
  }

  const get = _.partial(request, 'GET');
  const post = _.partial(request, 'POST');
  const put = _.partial(request, 'PUT');
  const destroy = _.partial(request, 'DELETE');

  const withRoute = route => create(`${baseUrl}/${route}`, headersAuthentication);

  return { get, post, put, destroy, withRoute };
};

export default { create };
