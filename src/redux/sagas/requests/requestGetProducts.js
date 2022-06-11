import axios from 'axios';

export function requestGetProducts() {
  return axios.request({
    method: 'Get',
    url: `https://fakestoreapi.com/products`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
