import { gql } from '@apollo/client';

export const CATEGORY_BY_ID = gql`
  query Category_By_Id($id: ID!) {
    categoryById(id: $id) {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  }
`;

export const CATEGORY_ALL = gql`
  query CategoryAll {
    categoryAll {
      id
      name
      abbr
      createdAt
      updatedAt
    }
  }
`;
