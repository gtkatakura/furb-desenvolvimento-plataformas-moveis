import api from './fetch';

const basePath = '/institute';

const getInstitute = id => {
  return api.get(basePath.concat('/'), { id });
};

const newInstitute = institute => {
  return api.post(basePath.concat('/'), institute);
};

const listInstitutes = () => {
  return api.get(basePath.concat('/'), { })
};

export default {
  getInstitute, newInstitute, listInstitutes
};