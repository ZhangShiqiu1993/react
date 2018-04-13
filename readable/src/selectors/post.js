import sortBy from 'sort-by';

export default (posts, {field}) => {
  return posts.filter((post) => !post.deleted).sort(sortBy(field));
};