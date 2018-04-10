import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentList from './CommentList';

const PostDetailPage = (props) => {
  console.log('post detail page', props);
  const {post, comments} = props;
  return (
    <div>
      <h3>Post Detail Page</h3>
      {!!post && (
        <div>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p> body - {post.body}</p>
          <p>author - {post.author}</p>
          <p>number of comment: {post.commentCount}</p>
          <p>current score: {post.voteScore}</p>
          <button>upvote</button>
          <button>downvote</button>
          <button>delete</button>
          <p>detail page</p>
        </div>
      )}
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