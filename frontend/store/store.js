import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
    // createStore(rootReducer, preloadedState, applyMiddleware(thunk, null));

export default configureStore;