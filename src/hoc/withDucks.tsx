/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

export default (duckInjectFns = []) => (WrappedComponent: any) => (props: any) => {
  const { store } = useContext(ReactReduxContext);
  const [isInjected, setIsInjected] = useState(false);

  useEffect(() => {
    const derivedPromises = duckInjectFns.map((fn: Function) => fn(store));
    Promise.all(derivedPromises).then(() => setIsInjected(true));
  }, [store]);

  return isInjected ? <WrappedComponent {...props} /> : null;
};
