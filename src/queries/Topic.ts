import { gql } from '@apollo/client';

import { CategoryFragments } from './CategoryFragments';
import { SubCategoryFragments } from './SubCategoryFragments';

export const TOPIC_BY_ID = gql`
  query TopicById($id: ID!) {
    topicById(id: $id) {
      id
      title
      url
      category {
        ...CategoryInfo
      }
      subCategory {
        ...SubCategoryInfo
      }
      order
    }
  }
  ${CategoryFragments.categoryInfo}
  ${SubCategoryFragments.subCategoryInfo}
`;

export const TOPIC_BY_CATEGORY = gql`
  query TopicByCategory($id: ID!) {
    topicByCategory(categoryId: $id) {
      id
      title
      url
      category {
        ...CategoryInfo
      }
      subCategory {
        ...SubCategoryInfo
      }
      order
    }
  }
  ${CategoryFragments.categoryInfo}
  ${SubCategoryFragments.subCategoryInfo}
`;

export const TOPIC_BY_CATEGORY_ABBR = gql`
  query TopicByCategoryAbbr($abbr: String!) {
    topicByCategoryAbbr(abbr: $abbr) {
      id
      title
      url
      category {
        ...CategoryInfo
      }
      subCategory {
        ...SubCategoryInfo
      }
      order
    }
  }
  ${CategoryFragments.categoryInfo}
  ${SubCategoryFragments.subCategoryInfo}
`;

export const TOPIC_ALL = gql`
  query TopicAll {
    topicAll {
      id
      title
      url
      createdAt
      updatedAt
      category {
        ...CategoryInfo
      }
      subCategory {
        ...SubCategoryInfo
      }
      order
    }
  }
  ${CategoryFragments.categoryInfo}
  ${SubCategoryFragments.subCategoryInfo}
`;
