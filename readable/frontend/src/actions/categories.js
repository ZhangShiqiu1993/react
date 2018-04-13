import {LOAD_CATEGORIES} from "./type";

export const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
});