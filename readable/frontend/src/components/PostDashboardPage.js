import React from 'react';
import PostList from "./PostList";

const PostDashboardPage = () => (
  <div>
    order by
    <select name="" id="">
      <option value="latest-date">latest date</option>
      <option value="earliest-date">earliest date</option>
      <option value="highest-score">highest score</option>
      <option value="lowest-score">lowest score</option>
    </select>

    <PostList/>

  </div>
);

export default PostDashboardPage;