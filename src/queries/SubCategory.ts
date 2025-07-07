import { gql } from '@apollo/client';

import { CategoryFragments } from './CategoryFragments';

export const SUB_CATEGORY_BY_ID = gql`
  query SubCategoryById($id: ID!) {
    subCategoryById(id: $id) {
      id
      name
      order
      createdAt
      updatedAt
      category {
        ...CategoryInfo
      }
    }
  }
  ${CategoryFragments.categoryInfo}
`;

export const SUB_CATEGORY_BY_CATEGORY = gql`
  query SubCategoryByCategory($categoryId: ID!) {
    subCategoryByCategory(categoryId: $categoryId) {
      id
      name
      order
      createdAt
      updatedAt
      category {
        ...CategoryInfo
      }
    }
  }
  ${CategoryFragments.categoryInfo}
`;

export const SUB_CATEGORY_ALL = gql`
  query SubCategoryAll {
    subCategoryAll {
      id
      name
      order
      createdAt
      updatedAt
      category {
        ...CategoryInfo
      }
    }
  }
  ${CategoryFragments.categoryInfo}
`;
