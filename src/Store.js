import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './Reducers' // index.js path webpack aceept main file index.js




// connect Reducer
const store = createStore(rootReducer, composeWithDevTools());

export default store;