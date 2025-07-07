import { gql } from '@apollo/client';

export const CategoryFragments = {
  categoryInfo: gql`
    fragment CategoryInfo on Category {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  `,
};
