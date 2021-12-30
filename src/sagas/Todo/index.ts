export const todoInjectible = (store: any): Promise<void> =>
  Promise.all([import(/* webpackChunkName: "todo.saga" */ './todo.saga'), import(/* webpackChunkName: "todo.reducer" */ './todo.reducer')]).then(
    ([saga, reducer]) => {
      store.injectSaga('todoSaga', saga.default);
      store.injectReducer('todoSaga', reducer.default);
    },
  );
