import { gql } from '../__generated__';

export const TOPIC_BY_ID = gql(`
  query TopicById($id: ID!) {
    topicById(id: $id) {
      id
      title
      url
      category {
		id
		name
		abbr
		order
		createdAt
		updatedAt		
      }
      subCategory {
		id
		name
		order
		createdAt
		updatedAt
      }
      order
    }
  }
`);

export const TOPIC_BY_CATEGORY = gql(`
  query TopicByCategory($id: ID!) {
    topicByCategory(categoryId: $id) {
      id
      title
      url
      category {
		id
		name
		abbr
		order
		createdAt
		updatedAt
      }
      subCategory {
		id
		name
		order
		createdAt
		updatedAt
      }
      order
    }
  }
`);

export const TOPIC_BY_CATEGORY_ABBR = gql(`
  query TopicByCategoryAbbr($abbr: String!) {
    topicByCategoryAbbr(abbr: $abbr) {
      id
      title
      url
      category {
		id
		name
		abbr
		order
		createdAt
		updatedAt
      }
      subCategory {
		id
		name
		order
		createdAt
		updatedAt
      }
      order
    }
  }
`);

export const TOPIC_ALL = gql(`
  query TopicAll {
    topicAll {
      id
      title
      url
      createdAt
      updatedAt
      category {
		id
		name
		abbr
		order
		createdAt
		updatedAt
      }
      subCategory {
		id
		name
		order
		createdAt
		updatedAt
      }
      order
    }
  }
`);
