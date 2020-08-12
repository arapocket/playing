import { combineReducers } from 'redux'
import todos from './reducers/todos'
import names from "./reducers/names"
import numbers from "./reducers/numbers";
export default combineReducers({
    todos,
    names,
    numbers,
})