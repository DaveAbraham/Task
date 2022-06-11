import {call, put} from 'redux-saga/effects';
import {requestGetProducts} from '../requests/requestGetProducts';
import {getProductsSuccess, getProductsError} from '../../reducers/homeReducer';

export function* handleGetProductsRequest(action) {
  try {
    const response = yield call(requestGetProducts);
    // console.log('response from get products request>>>', response.data);
    if (response.status) {
      yield put(getProductsSuccess(response.data));
    } else {
      yield put(getProductsError(response.data));
    }
  } catch (error) {
    console.log('error from getall products >>>', error);
  }
}
