import * as actionTypes from './actions';

export const initialState = { user: {} };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
};

export default AuthReducer;
