import {TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS} from './actionTypes';

const initialState = {
  data: '',
  loading: false,
  error: '',
};

export default function TODO(state = initialState, action: any) {
  switch (action.type) {
    case TODO_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case TODO_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: '',
      });
    }
    case TODO_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    }
    default:
      return state;
  }
}
