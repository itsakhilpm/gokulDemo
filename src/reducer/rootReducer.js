import {
    combineReducers
} from 'redux';
import user from './userReducer';
const root =  combineReducers({
    user
});
export default root;