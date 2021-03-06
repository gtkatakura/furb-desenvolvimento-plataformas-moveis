const _ = require('lodash');
const FetchApi = require('./fetchApi');
const repositories = require('./repositories');

const signUp = async (url, attributes) => {
  const fetchApi = FetchApi.create(url);
  const { status, data, errors: { full_messages } = {} } = await fetchApi.post('/auth', attributes);

  if (status === 'error') {
    throw new Error(_(full_messages).uniq().join('\n'));
  }

  return _.mapValues(
    _.mapKeys(repositories, _.rearg(_.camelCase, 1)),
    repository => repository.create(fetchApi)
  );
};

const signIn = async (url, attributes) => {
  const fetchApi = FetchApi.create(url);
  let { status, data, errors } = await fetchApi.post('/auth/sign_in', attributes);

  if (_.has(errors, 'full_messages')) {
    errors = errors.full_messages;
  }

  if (status === 'error' || _.some(errors)) {
    throw new Error(_(errors).uniq().join('\n'));
  }

  return _.mapValues(
    _.mapKeys(repositories, _.rearg(_.camelCase, 1)),
    repository => repository.create(fetchApi)
  );
}

module.exports = { signUp, signIn };
