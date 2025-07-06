import { gql } from "@apollo/client";

export const SubCategoryFragments = {
  subCategoryInfo: gql`
    fragment SubCategoryInfo on SubCategory {
      id
      name
      order
      createdAt
      updatedAt
    }
  `,
};
