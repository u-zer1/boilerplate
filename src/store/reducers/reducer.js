import * as t from '../actions/actionsTypes';
const initialState = {
  data: []
};

const ReducerT = (state = initialState, action) => {
  if (action.type === t.SAVE_SOME) {
    return {
      ...state,
      data: action.payload
    };
  } else {
    return state;
  }
};
export default ReducerT;
