import { gql } from '@apollo/client';

export const CategoryFragments = gql`
  fragment CategoryInfo on Category {
    id
    name
    abbr
    order
    createdAt
    updatedAt
  }
`;
