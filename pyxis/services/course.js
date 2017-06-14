import api from './fetch';

const basePath = '/course';

const getCourse = id => {
  return api.get(basePath.concat('/'), { id });
};

const newCourse = course => {
  return api.post(basePath.concat('/'), course);
};

const listCourses = institute => {
  return api.get(basePath.concat('/'), { institute })
};

export default {
  getCourse, newCourse, listCourses
};