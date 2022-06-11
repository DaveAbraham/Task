import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import CartReducer from './reducers/cartReducer';
import homeReducer from './reducers/homeReducer';
import {watcherSaga} from './sagas/rootSaga';

const rootReducer = combineReducers({
  cart: CartReducer,
  home: homeReducer,
});

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
sagaMiddleWare.run(watcherSaga);

export default store;
