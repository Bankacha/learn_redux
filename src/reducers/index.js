import {combineReducers} from 'redux';
import numberReducer from './numberGenerator';
import counterReducer from './counter';
import loggedReducer from './loggedIn';


const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer,
    generate: numberReducer
})

export default allReducers; 