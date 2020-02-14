import * as API from '../api/API';
import * as t from './actionsTypes';

export const saveSome = state => {
  return {
    type: t.SAVE_SOME,
    payload: state
  };
};

export const getSome = () => dispatch => {
  return API.fetchTest()
    .then(response => {
      if (response.status === 200) {
        saveSome(response.data);
      }
    })
    .catch(err => console.log(err));
};
