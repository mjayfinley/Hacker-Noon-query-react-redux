import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const composeEnhanhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer, composeEnhanhancers(applyMiddleware(saga, thunk))
);

saga.run(rootSaga)

export default store;
