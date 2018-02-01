const localhost = "http://localhost:3001/";
const headers = new Headers();
headers.set('Authorization', "whatever-you-want");

export const getAllCategories = () =>
  fetch(localhost + "categories", {headers, method: 'GET'})
    .then(res => res.json())
    .then(data => data.categories);

export const getPostsForCategory = (category) =>
  fetch(localhost + `${category}/posts`, {headers, method: 'GET'})
    .then(res => res.json());

export const getAllPosts = () =>
  fetch(localhost + 'posts', {headers, method: 'GET'})
    .then(res => res.json());

export const addAPost = (post) =>
  // TODO
  fetch(localhost + 'posts', {headers, method: 'POST'});

export const getPostDetail = (id) =>
  fetch(localhost + `posts/${id}`, {headers, method: 'GET'});

export const voteOnAPost = (id) =>
  // TODO
  fetch(localhost + `posts/${id}`, {
    headers,
    method: 'POST',
  })