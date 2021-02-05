import { request } from "./core.services";

const getInfo = async resourceName =>
  request({ url: `${resourceName}/info`, method: "get" });

const getAll = async resourceName => {
  const { data: fields } = await getInfo(resourceName);
  if (fields.extraFields) {
    await request({
      url: `${resourceName}?expand=${fields.extraFields}`,
      method: "get"
    });
  } else {
    await request({
      url: `${resourceName}`,
      method: "get"
    });
  }
};

const getOne = async (resourceName, id) => {
  const { data: fields } = await getInfo(resourceName);
  if (fields.extraFields) {
    await request({
      url: `${resourceName}/view/${id}?expand=${fields.extraFields}`,
      method: "get"
    });
  } else {
    await request({
      url: `${resourceName}/view/${id}`,
      method: "get"
    });
  }
};

const edit = async (resourceName, id, form) => {
  await request({
    url: `${resourceName}/update/${id}`,
    method: "post",
    data: form
  });
};

const create = async (resourceName, form) => {
  await request({
    url: `${resourceName}/create`,
    method: "post",
    data: form
  });
};

const remove = async (resourceName, id) => {
  await request({
    url: `${resourceName}/delete/${id}`,
    method: "post"
  });
};

export { getAll, getOne, getInfo, edit, create, remove };
