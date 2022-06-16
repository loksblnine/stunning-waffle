import {combineReducers} from 'redux';

import posts from './postsReducer';
import user from "./userReducer";

const appReducer = combineReducers({
  user,
  posts
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOG_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
