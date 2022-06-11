import {takeLatest, all} from 'redux-saga/effects';
import {GET_PRODUCTS} from '../reducers/homeReducer';
import {handleGetProductsRequest} from './handlers/handleGetProductsRequest';
import {GET_PRODUCT_DETAIL} from '../reducers/homeReducer';
import {handleGetProductDetailRequest} from './handlers/handleGetProductDetailRequest';

export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProductsRequest);
  yield takeLatest(GET_PRODUCT_DETAIL, handleGetProductDetailRequest);
}
