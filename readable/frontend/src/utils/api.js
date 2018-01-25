const localhost = "http://localhost:3001/";
const headers = new Headers();
headers.set('Authorization', "whatever-you-want");

const getAllCategories = () => {
  let url = localhost + "categories";
  return fetch(url, {headers, method: 'GET'})
    .then(res => res.json())
    .then(data => data.categories);
};

let data = getAllCategories();

const getPosts = (category) => {
  let url = localhost + `/${category}/posts`;
  return fetch(url, {headers, method: 'GET',});
};