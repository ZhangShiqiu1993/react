import React from 'react';
import PostList from "./PostList";
import PostFilter from './PostFilter'

const PostDashboardPage = () => (
  <div>
    <PostFilter/>
    <PostList/>
  </div>
);

export default PostDashboardPage;