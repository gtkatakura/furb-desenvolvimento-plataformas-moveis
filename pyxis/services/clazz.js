import api from './fetch';

const basePath = '/course';

const getClazz = id => {
  return api.get(basePath.concat('/'), { id });
};

const newClazz = clazz => {
  return api.post(basePath.concat('/'), clazz);
};

const listClazz = course => {
  return api.get(basePath.concat('/'), { course })
};

export default {
  getClazz, newClazz, listClazz
};