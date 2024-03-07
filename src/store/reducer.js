import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';
import AuthReducer from './authReducer';

const reducer = combineReducers({
  customization: customizationReducer,
  auth: AuthReducer
});

export default reducer;
