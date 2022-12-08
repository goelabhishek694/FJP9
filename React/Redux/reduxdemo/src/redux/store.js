import { createStore } from 'redux';
import BatReducer from './batReducer';
import BallReducer from './ballReducer';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

export default store 