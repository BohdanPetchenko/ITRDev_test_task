import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import reducer from './reducer'
import promiseReducer from './promise-reducer'


export default combineReducers({
    reducer,
    promiseReducer,
    form: formReducer
})