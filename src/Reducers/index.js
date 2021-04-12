import { combineReducers } from 'redux';
import userReducer from './userReducer';
import {villaReducer} from './villasReducer'
export default combineReducers({
    userReducer,
    villaReducer
});