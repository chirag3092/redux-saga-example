import { delay, put, takeEvery } from 'redux-saga/effects';
import { WatcherSaga } from '../genericTypes.d';
import { TODO_GET_LIST_DATA_STATE, TODO_GET_LIST_EFFECT, TODO_GET_LIST_LOADING_STATE } from './todo.actionTypes';

function* getTodoList() {
  yield put({ type: TODO_GET_LIST_LOADING_STATE });
  yield delay(500);
  yield put({ type: TODO_GET_LIST_DATA_STATE });
}

function* watchTodo(): WatcherSaga {
  yield takeEvery(TODO_GET_LIST_EFFECT, getTodoList);
}

export default watchTodo;
