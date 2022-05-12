import { combineReducers } from 'redux'
import loginReducer from '../domain/auth/components/login/reducer';

export default combineReducers({
    login: loginReducer
});