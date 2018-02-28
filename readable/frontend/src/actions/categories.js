export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});

const categories = {
  categories: [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ]
};
