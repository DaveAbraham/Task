import {call, put} from 'redux-saga/effects';
import {
  getProductDetailSuccess,
  getProductDetailError,
} from '../../reducers/homeReducer';
import {requestGetProductDetail} from '../requests/requestGetProductDetail';

export function* handleGetProductDetailRequest(action) {
  try {
    const response = yield call(requestGetProductDetail, action.payload);
    // console.log('response from get product detail request>>>', response.data);
    if (response.status) {
      yield put(getProductDetailSuccess(response.data));
    } else {
      yield put(getProductDetailError(response.data));
    }
  } catch (error) {
    console.log('error from getall products >>>', error);
  }
}
