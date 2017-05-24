const create = fetchApi => {
  return {
    create: async model => {
      return await fetchApi.post(`coordinators`, model);
    }
  };
};

module.exports = { create };
