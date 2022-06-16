import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setPosts} from "../../../store/actions/postActions";
import {Spinner} from "react-bootstrap";
import Post from "./Post";

const Blog = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.filteredItems);
  const postPage = useAppSelector((state) => state.posts.page);
  const arePostsReady = useAppSelector((state) => state.posts.isReady);

  useEffect(() => {
    if (posts.length <= 0) {
      dispatch(setPosts(postPage));
    }
  }, []);

  if (!arePostsReady) {
    return <Spinner animation="grow"/>;
  }
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Post post={post} key={`Blog${index}`}/>
        );
      })}
    </div>
  );
};

export default Blog;