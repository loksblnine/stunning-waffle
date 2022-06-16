import Blog from "../components/content/guest/Blog";

export const API_URL = "http://localhost:5000";

export const ACTIONS = {
  POSTS: {
    SET_POSTS: "POSTS.SET_POSTS",
    SET_READY_POSTS: "POSTS.SET_READY_POSTS",
    DELETE_POST: "POSTS.DELETE_POST",
    UPDATE_POST: "POSTS.UPDATE_POST",
    ADD_POST: "POSTS.ADD_POST"
  },
  USER: {
    SET_USER: "SET_USER",
    SET_READY_USER: "SET_READY_USER",
    LOG_OUT: "LOG_OUT",
  }
};
//
// export const authAdminRoutes = [
//   {
//     path: '/admin',
//     Component: <AdminPanel />
//   },
//   {
//     path: '/posts',
//     Component: <PostsList />
//   },
// ];

export const guestRoutes = [
  {
    path: '/blog',
    Component: <Blog />
  }
]
