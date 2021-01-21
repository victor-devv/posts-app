// THIS REPS THE OVERALL REDUCERS

import { combineReducers } from "redux";

import postReducer from "./posts/post.reducer";

export default combineReducers({
  posts: postReducer,
});
