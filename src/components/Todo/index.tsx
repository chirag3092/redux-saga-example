import { useEffect } from 'react';
import { connect } from 'react-redux';
import withDucks from '../../hoc/withDucks';
import { todoInjectible } from '../../sagas/Todo';
import { TODO_GET_LIST_EFFECT } from '../../sagas/Todo/todo.actionTypes';

const Todo = ({ getTodoList, todoSaga }: any) => {
  const { loading, data } = todoSaga;
  useEffect(() => {
    getTodoList();
  }, []);
  return loading ? 'Loading.......' : data.map((todo: any) => <div key={todo.id}>{todo.name}</div>);
};

const mapStateToProps = (state: any) => {
  const { todoSaga = {} } = state;
  return {
    todoSaga,
  };
};

interface Dispatch {
  type: string;
  payload?: any;
}

const mapDispatchToProps = (dispatch: (_args: Dispatch) => void) => ({
  getTodoList: () => dispatch({ type: TODO_GET_LIST_EFFECT }),
});

const injectibleSagas = [todoInjectible] as any;

export default withDucks(injectibleSagas)(connect(mapStateToProps, mapDispatchToProps)(Todo));
