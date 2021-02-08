import axios from 'axios';

export const request = async ({ url, method, data = {}, token = null }) => {
  // try {
    return await axios.request({
      url: `${url}`,
      method: method,
      baseURL: 'http://10.10.3.30:9090',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
  // } catch (e) {
  //   console.log(e.response);
  // }
};
