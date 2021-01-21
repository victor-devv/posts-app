import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// add middlewares to catch actions. middlewares stand between action and root reducers and they are just functions that receive actions and do something with them and then pass them to the root reducer
const middlewares = [logger, thunk];

// const initialState = {};
//initialState,
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// we spread the constant middlewares into applyMiddleware() cos we can decide to add another middleware to the middlewares array and it'll be passed into the function directly by spread. ApplyMiddleware takes an infinite number of middlewares (asides logger)

export default store;
