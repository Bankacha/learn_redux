import {combineReducers} from 'redux';
import numberReducer from './numberGenerator';
import counterReducer from './counter';
import loggedReducer from './loggedIn';
import contactsReducer from './contacts'

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer,
    generate: numberReducer,
    contacts: contactsReducer
})

export default allReducers; 