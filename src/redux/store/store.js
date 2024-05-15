import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// IMPORT REDUCERS
import rootReducer from "../reducers";

import { initialStateFromLocalStorage as initialState } from "../localstorage";

initialState.importFile = {
    status: null,
}

// ENABLE ASYNC ON ACTINS
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;