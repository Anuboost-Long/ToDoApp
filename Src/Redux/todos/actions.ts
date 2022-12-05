import {returnToDispatch} from '../../Utils/apiHelper';
import {getTodo, showLog} from '../../Utils/AsyncHelper';
import {TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS} from './actionTypes';

export const fetchToDo = (payload = '') => {
  return (dispatch: any) => {
    returnToDispatch(dispatch, TODO_REQUEST);
    return new Promise(async (resolve, reject) => {
      const todo = await getTodo()
      if (todo.length >= 0) {
        returnToDispatch(dispatch, TODO_SUCCESS, todo.length > 0 ? JSON.parse(todo) :[]);
      } else {
        returnToDispatch(dispatch, TODO_FAILURE);
      }
    });
  };
};