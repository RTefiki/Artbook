// src/redux/store.js
import { createStore } from 'redux';


const SELECT_USER = 'SELECT_USER';


export const selectUser = (userName) => ({
  type: SELECT_USER,
  payload: userName,
});


const initialState = {
  selectedUser: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
}

// Krijimi i store-it
const store = createStore(userReducer);

export default store;