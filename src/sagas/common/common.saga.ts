import { takeEvery } from 'redux-saga/effects';
import { WatcherSaga } from '../genericTypes.d';
import { COMMON_GET_HOME_INFO } from './common.actiontypes';

const projecctInfo = [
  {
    id: 1,
    name: 'Fucker',
  },
  {
    id: 2,
    name: 'More Fucker',
  },
];

const getProjectInfo = () => Promise.resolve(projecctInfo).then((data: any) => data);

function* getCommonInfo(): any {
  const response = yield getProjectInfo();
  console.log('response ==>', response);
}

export function* watchCommon(): WatcherSaga {
  yield takeEvery(COMMON_GET_HOME_INFO, getCommonInfo);
}
