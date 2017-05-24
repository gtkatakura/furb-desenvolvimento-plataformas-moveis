const { isNumber } = require('lodash');

const create = apiBase => {
  const api = apiBase.withRoute('coordinators');

  return {
    async find(id) {
      return await api.get(`/${id}`);
    },

    async save(model) {
      if (isNumber(model.id)) {
        return await api.put(`/${model.id}`, model);
      }

      return await api.post('/', model);
    },

    async destroy(model) {
      return await api.destroy(`/${model.id}`);
    }
  };
};

module.exports = { create };
