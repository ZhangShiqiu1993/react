const server = "http://localhost:3001";
const headers = new Headers({
  Authorization: "whatever-you-want",
  Accept: 'application/json',
  'Content-Type': 'application/json'
});

export const getCategories = () =>
  fetch(`${server}/categories`, {headers, method: 'GET'})
    .then(res => res.json())
    .then(data => data.categories);

export const getPostsByCategory = (category) =>
  fetch(`${server}/${category}/posts`, {headers, method: 'GET'})
    .then(res => res.json());

export const getPosts = () =>
  fetch(`${server}/posts`, {headers, method: 'GET'})
    .then(res => res.json());

export const addPost = (post) =>
  fetch(`${server}/posts`, {headers, method: 'POST', body: JSON.stringify(post)})
    .then(res => res.json());

export const getPostByID = (id) =>
  fetch(`${server}/posts/${id}`, {headers, method: 'GET'})
    .then(res => res.json());

export const voteOnPost = (id, option) =>
  fetch(`${server}/posts/${id}`, {headers, method: 'POST', body: JSON.stringify({option})});

export const editPost = (id, update) =>
  fetch(`${server}/posts/${id}`, {headers, method: 'PUT', body: JSON.stringify(update)})
    .then(res => res.json());

export const deletePost = (id) =>
  fetch(`${server}/posts/${id}`, {headers, method: 'DELETE'});

export const getCommentsByPost = (postID) =>
  fetch(`${server}/posts/${postID}/comments`, {headers, method: 'GET'})
    .then(res => res.json());

export const addComment = (comment) =>
  fetch(`${server}/comments`, {headers, method: 'POST', body: JSON.stringify(comment)});

export const getCommentByID = (id) =>
  fetch(`${server}/comments/${id}`, {headers, method: 'GET'})
    .then(res => res.json());

export const voteOnComment = (id, option) =>
  fetch(`${server}/comments/${id}`, {headers, method: 'POST', body: JSON.stringify({option})});

export const editComment = (id, update) =>
  fetch(`${server}/comments/${id}`, {headers, method: 'PUT', body: JSON.stringify(update)})
    .then(res => res.json());

export const deleteComment = (id) =>
  fetch(`${server}/comments/${id}`, {headers, method: 'DELETE'})
    .then(res => res.json());
