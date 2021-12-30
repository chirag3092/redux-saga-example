import { all } from 'redux-saga/effects';
import { watchCommon } from './common/common.saga';
import { RootSaga } from './genericTypes.d';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga(): RootSaga {
  yield all([watchCommon()]);
}
