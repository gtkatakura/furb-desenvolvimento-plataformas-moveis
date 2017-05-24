const { isNumber } = require('lodash');

const create = apiBase => {
  const api = apiBase.withRoute('coordinators');

  return {
    async save(model) {
      if (isNumber(model.id)) {
        return await api.put(`/${model.id}`, model);
      }

      return await api.post('/', model);
    }
  };
};

module.exports = { create };
