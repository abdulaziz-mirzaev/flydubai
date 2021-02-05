import { request } from "./core.service";

const signIn = async formData => {
  await request({
    url: "login",
    method: "post",
    data: formData
  });
};

const signUp = async formData => {
  await request({
    url: "register",
    method: "post",
    data: formData
  });
};

const me = async token => {
  await request({
    url: "user/get",
    method: "post",
    data: token
  });
};

export { signIn, signUp, me };
