import axios from 'axios';

export function requestGetProductDetail(productId) {
  return axios.request({
    method: 'Get',
    url: `https://fakestoreapi.com/products/${productId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
