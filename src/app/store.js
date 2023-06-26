import { configureStore } from "@reduxjs/toolkit";

import postsReducers from "../features/posts/postsSlice";
import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
  },
});
