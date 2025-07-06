import { gql } from '@apollo/client';
import { CategoryFragments } from '../queries/CategoryFragments';
import { SubCategoryFragments } from '../queries/SubCategoryFragments';

export const CREATE_TOPIC = gql`
  mutation CreateTopic($input: createTopicInput!) {
    createTopic(input: $input) {
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

export const DELETE_TOPIC = gql`
  mutation DeleteTopic($id: ID!) {
    deleteTopic(id: $id) {
      id
      title
      url
    }
  }
`;

export const UPDATE_TOPIC = gql`
  mutation UpdateTopic($id: ID!, $input: updateTopicInput!) {
    updateTopic(id: $id, input: $input) {
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
