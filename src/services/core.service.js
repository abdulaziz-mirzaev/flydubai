import axios from "axios";

export const request = async ({ url, method, data = {} }) => {
  const response = await axios.request({
    url: `${url}`,
    method: method,
    baseURL: "http://10.10.3.30:9090",
    headers: {
      Authorization: "Bearer O8jPJnJN7f"
    },
    data: data
  });

  // if (response.statusText !== "OK") {
  //   throw new Error(response);
  // }

  return response;
};
