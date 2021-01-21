import { FETCH_POSTS, NEW_POST } from "./post.types"; //post action types

const initialState = {
  items: [], //this reps the  posts that come in from our action
  item: {}, //this reps the single post that we add and get the response back
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };

    case NEW_POST:
      //json placeholder wont save the new post technically. so you gotta save it to your state

      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
