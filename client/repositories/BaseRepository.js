const { isNumber } = require('lodash');

const create = route => ({
  create(apiBase) {
    const api = apiBase.withRoute(route);

    const all = async () => await api.get('/');
    const find = async id => await api.get(`/${id}`);
    const save = async model => {
      if (isNumber(model.id)) {
        return await api.put(`/${model.id}`, model);
      }

      return await api.post('/', model);
    };

    const destroy = async model => await api.destroy(`/${model.id}`);

    return { all, find, save, destroy };
  }
});

module.exports = { create };
