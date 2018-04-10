import React from 'react';
import {connect} from 'react-redux';
import CommentList from './CommentList';
import Post from './Post';

const PostDetailPage = (props) => {
  const {post, comments} = props;
  return (
    <div>
      <h3>Post Detail Page</h3>
      {!!post && (<Post {...post}/>)}
      {!!comments && <CommentList/> }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
    comments: state.comments.filter((comment) => comment.parentId === id)
  }
};

export default connect(mapStateToProps)(PostDetailPage);