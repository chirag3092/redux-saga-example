export const profileInjectible = (store: any): Promise<void> =>
  Promise.all([
    import(/* webpackChunkName: "profile.saga" */ './profile.saga'),
    import(/* webpackChunkName: "profile.reducer" */ './profile.reducer'),
  ]).then(([saga, reducer]) => {
    store.injectSaga('profileSaga', saga.default);
    store.injectReducer('profileSaga', reducer.default);
  });
