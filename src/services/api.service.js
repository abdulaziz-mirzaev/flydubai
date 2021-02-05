import { request } from './core.service';

const getInfo = async (resourceName, token) =>
  request({ url: `${resourceName}/info`, method: 'get', token });

const getAll = async (resourceName, token) => {
  const { data: fields } = await getInfo(resourceName, token);
  if (fields.extraFields) {
    await request({
      url: `${resourceName}?expand=${fields.extraFields}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    await request({
      url: `${resourceName}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

const getOne = async (resourceName, id, token) => {
  const { data: fields } = await getInfo(resourceName, token);
  if (fields.extraFields) {
    await request({
      url: `${resourceName}/view/${id}?expand=${fields.extraFields}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    await request({
      url: `${resourceName}/view/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

const edit = async (resourceName, id, form) => {
  await request({
    url: `${resourceName}/update/${id}`,
    method: 'post',
    data: form,
  });
};

const create = async (resourceName, form) => {
  await request({
    url: `${resourceName}/create`,
    method: 'post',
    data: form,
  });
};

const remove = async (resourceName, id) => {
  await request({
    url: `${resourceName}/delete/${id}`,
    method: 'post',
  });
};

export { getAll, getOne, getInfo, edit, create, remove };
