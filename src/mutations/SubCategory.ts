import { gql } from "@apollo/client";
import { CategoryFragments } from "../queries/CategoryFragments";

export const CREATE_SUB_CATEGORY = gql`
  mutation CreateSubCategory($input: createSubCategoryInput!) {
    createSubCategory(input: $input) {
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

export const DELETE_SUB_CATEGORY = gql`
  mutation DeleteSubCategory($id: ID!) {
    deleteSubCategory(id: $id) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SUB_CATEGORY = gql`
  mutation UpdateSubCategory($id: ID!, $input: updateSubCategoryInput!) {
    updateSubCategory(id: $id, input: $input) {
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
