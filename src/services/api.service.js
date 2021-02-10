import { request } from './core.service';
import store from '../store';

const getInfo = async (resourceName) => {
  const token = store.getters['auth/userToken'];
  return await request({ url: `${resourceName}/info`, method: 'get', data: {}, token: token });
};

const getAll = async (resourceName) => {
  const token = store.getters['auth/userToken'];
  const { data: fields } = await getInfo(resourceName);
  if (fields.extraFields) {
    return await request({
      url: `${resourceName}?expand=${fields.extraFields}`,
      method: 'get',
      data: {},
      token: token,
    });
  } else {
    return await request({
      url: `${resourceName}`,
      method: 'get',
      data: {},
      token: token,
    });
  }
};

const getOne = async (resourceName, id) => {
  const token = store.getters['auth/userToken'];
  const { data: fields } = await getInfo(resourceName);
  if (fields.extraFields) {
    return await request({
      url: `${resourceName}/view/${id}?expand=${fields.extraFields}`,
      method: 'get',
      data: {},
      token: token,
    });
  } else {
    return await request({
      url: `${resourceName}/view/${id}`,
      method: 'get',
      data: {},
      token: token,
    });
  }
};

const edit = async (resourceName, id, form) => {
  const token = store.getters['auth/userToken'];
  await request({
    url: `${resourceName}/update/${id}`,
    method: 'post',
    data: form,
    token,
  });
};

const create = async (resourceName, form) => {
  const token = store.getters['auth/userToken'];
  await request({
    url: `${resourceName}/create`,
    method: 'post',
    data: form,
    token,
  });
};

const remove = async (resourceName, id) => {
  const token = store.getters['auth/userToken'];
  await request({
    url: `${resourceName}/delete/${id}`,
    method: 'post',
    token,
  });
};

export { getAll, getOne, getInfo, edit, create, remove };
