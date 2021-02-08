import { request } from './core.service';

const signIn = async formData => {
  return await request({
    url: 'login',
    method: 'post',
    data: {
      username: formData.username,
      password_hash: formData.password_hash,
    },
  });
};

const signUp = async formData => {
  return await request({
    url: 'registration',
    method: 'post',
    data: {
      email: formData.email,
      password_hash: formData.password_hash,
      username: formData.username,
    },
  });
};

const me = async token => {
  return await request({
    url: 'user/get',
    method: 'post',
    data: { token },
    token,
  });
};

export { signIn, signUp, me };
