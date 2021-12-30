import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSata';
import { createReducer, createSagaInjector } from './sagas/utils';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = () => {
  const store = createStore(() => {}, composeEnhancers(applyMiddleware(sagaMiddleWare)));
  const injectSaga = createSagaInjector(sagaMiddleWare.run, rootSaga);

  // Create an object for any later reducers
  const asyncReducers: Record<string, unknown> = {};
  const resetReducers = () => store.replaceReducer(createReducer(asyncReducers));

  const injectReducer = (key: string, reducer: unknown) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    resetReducers();
    return store;
  };
  return { ...store, injectSaga, injectReducer };
};

export default configureStore;
