import * as axios from 'axios';

// const accessToken = () => `Bearer ${store.getState().user.accessToken}`;
const axiosInstance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
});

export const fetchTest = params => {
  let url = endpoints.apiURl;
  const data = { ...params };
  return axiosInstance.get(url, data, { headers: {} });
};
