/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateCategory($input: createCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CreateCategoryDocument,
    "\n  mutation DeleteCategory($id: ID!) {\n    deleteCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.DeleteCategoryDocument,
    "\n  mutation UpdateCategory($id: ID!, $input: updateCategoryInput!) {\n    updateCategory(id: $id, input: $input) {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.UpdateCategoryDocument,
    "\n  mutation CreateSubCategory($input: createSubCategoryInput!) {\n    createSubCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": typeof types.CreateSubCategoryDocument,
    "\n  mutation DeleteSubCategory($id: ID!) {\n    deleteSubCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.DeleteSubCategoryDocument,
    "\n  mutation UpdateSubCategory($id: ID!, $input: updateSubCategoryInput!) {\n    updateSubCategory(id: $id, input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": typeof types.UpdateSubCategoryDocument,
    "\n  mutation CreateTopic($input: createTopicInput!) {\n    createTopic(input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.CreateTopicDocument,
    "\n  mutation DeleteTopic($id: ID!) {\n    deleteTopic(id: $id) {\n      id\n      title\n      url\n    }\n  }\n": typeof types.DeleteTopicDocument,
    "\n  mutation UpdateTopic($id: ID!, $input: updateTopicInput!) {\n    updateTopic(id: $id, input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.UpdateTopicDocument,
    "\n  query Category_By_Id($id: ID!) {\n    categoryById(id: $id) {\n      id\n      name\n      abbr\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.Category_By_IdDocument,
    "\n  query CategoryAll {\n    categoryAll {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CategoryAllDocument,
    "\n  fragment CategoryInfo on Category {\n    id\n    name\n    abbr\n    order\n    createdAt\n    updatedAt\n  }\n": typeof types.CategoryInfoFragmentDoc,
    "\n  query SubCategoryById($id: ID!) {\n    subCategoryById(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": typeof types.SubCategoryByIdDocument,
    "\n  query SubCategoryByCategory($categoryId: ID!) {\n    subCategoryByCategory(categoryId: $categoryId) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": typeof types.SubCategoryByCategoryDocument,
    "\n  query SubCategoryAll {\n    subCategoryAll {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": typeof types.SubCategoryAllDocument,
    "\n    fragment SubCategoryInfo on SubCategory {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  ": typeof types.SubCategoryInfoFragmentDoc,
    "\n  query TopicById($id: ID!) {\n    topicById(id: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\t\t\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.TopicByIdDocument,
    "\n  query TopicByCategory($id: ID!) {\n    topicByCategory(categoryId: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.TopicByCategoryDocument,
    "\n  query TopicByCategoryAbbr($abbr: String!) {\n    topicByCategoryAbbr(abbr: $abbr) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.TopicByCategoryAbbrDocument,
    "\n  query TopicAll {\n    topicAll {\n      id\n      title\n      url\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": typeof types.TopicAllDocument,
    "\n  query CurrentWeatherByCity($city: String!, $unit: Units) {\n    currentWeatherByCity(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      weather {\n        dt\n        condition\n        description\n        feelsLike\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n      }\n    }\n  }\n": typeof types.CurrentWeatherByCityDocument,
    "\n  query DailyForecast($city: String!, $unit: Units) {\n    dailyForecast(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      forecastList {\n        dt\n        condition\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n        wind\n        rain\n      }\n    }\n  }\n": typeof types.DailyForecastDocument,
    "\n    fragment temperature on Temperature {\n      day\n      min\n      max\n    }\n  ": typeof types.TemperatureFragmentDoc,
    "\n    fragment cityInfo on CityInfo {\n      name\n      country\n      lat\n      lon\n    }\n  ": typeof types.CityInfoFragmentDoc,
};
const documents: Documents = {
    "\n  mutation CreateCategory($input: createCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateCategoryDocument,
    "\n  mutation DeleteCategory($id: ID!) {\n    deleteCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": types.DeleteCategoryDocument,
    "\n  mutation UpdateCategory($id: ID!, $input: updateCategoryInput!) {\n    updateCategory(id: $id, input: $input) {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateCategoryDocument,
    "\n  mutation CreateSubCategory($input: createSubCategoryInput!) {\n    createSubCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": types.CreateSubCategoryDocument,
    "\n  mutation DeleteSubCategory($id: ID!) {\n    deleteSubCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": types.DeleteSubCategoryDocument,
    "\n  mutation UpdateSubCategory($id: ID!, $input: updateSubCategoryInput!) {\n    updateSubCategory(id: $id, input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": types.UpdateSubCategoryDocument,
    "\n  mutation CreateTopic($input: createTopicInput!) {\n    createTopic(input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.CreateTopicDocument,
    "\n  mutation DeleteTopic($id: ID!) {\n    deleteTopic(id: $id) {\n      id\n      title\n      url\n    }\n  }\n": types.DeleteTopicDocument,
    "\n  mutation UpdateTopic($id: ID!, $input: updateTopicInput!) {\n    updateTopic(id: $id, input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.UpdateTopicDocument,
    "\n  query Category_By_Id($id: ID!) {\n    categoryById(id: $id) {\n      id\n      name\n      abbr\n      order\n      createdAt\n      updatedAt\n    }\n  }\n": types.Category_By_IdDocument,
    "\n  query CategoryAll {\n    categoryAll {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n": types.CategoryAllDocument,
    "\n  fragment CategoryInfo on Category {\n    id\n    name\n    abbr\n    order\n    createdAt\n    updatedAt\n  }\n": types.CategoryInfoFragmentDoc,
    "\n  query SubCategoryById($id: ID!) {\n    subCategoryById(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": types.SubCategoryByIdDocument,
    "\n  query SubCategoryByCategory($categoryId: ID!) {\n    subCategoryByCategory(categoryId: $categoryId) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": types.SubCategoryByCategoryDocument,
    "\n  query SubCategoryAll {\n    subCategoryAll {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n": types.SubCategoryAllDocument,
    "\n    fragment SubCategoryInfo on SubCategory {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  ": types.SubCategoryInfoFragmentDoc,
    "\n  query TopicById($id: ID!) {\n    topicById(id: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\t\t\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.TopicByIdDocument,
    "\n  query TopicByCategory($id: ID!) {\n    topicByCategory(categoryId: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.TopicByCategoryDocument,
    "\n  query TopicByCategoryAbbr($abbr: String!) {\n    topicByCategoryAbbr(abbr: $abbr) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.TopicByCategoryAbbrDocument,
    "\n  query TopicAll {\n    topicAll {\n      id\n      title\n      url\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n": types.TopicAllDocument,
    "\n  query CurrentWeatherByCity($city: String!, $unit: Units) {\n    currentWeatherByCity(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      weather {\n        dt\n        condition\n        description\n        feelsLike\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n      }\n    }\n  }\n": types.CurrentWeatherByCityDocument,
    "\n  query DailyForecast($city: String!, $unit: Units) {\n    dailyForecast(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      forecastList {\n        dt\n        condition\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n        wind\n        rain\n      }\n    }\n  }\n": types.DailyForecastDocument,
    "\n    fragment temperature on Temperature {\n      day\n      min\n      max\n    }\n  ": types.TemperatureFragmentDoc,
    "\n    fragment cityInfo on CityInfo {\n      name\n      country\n      lat\n      lon\n    }\n  ": types.CityInfoFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCategory($input: createCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategory($input: createCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteCategory($id: ID!) {\n    deleteCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCategory($id: ID!) {\n    deleteCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateCategory($id: ID!, $input: updateCategoryInput!) {\n    updateCategory(id: $id, input: $input) {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCategory($id: ID!, $input: updateCategoryInput!) {\n    updateCategory(id: $id, input: $input) {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateSubCategory($input: createSubCategoryInput!) {\n    createSubCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSubCategory($input: createSubCategoryInput!) {\n    createSubCategory(input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteSubCategory($id: ID!) {\n    deleteSubCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSubCategory($id: ID!) {\n    deleteSubCategory(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateSubCategory($id: ID!, $input: updateSubCategoryInput!) {\n    updateSubCategory(id: $id, input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSubCategory($id: ID!, $input: updateSubCategoryInput!) {\n    updateSubCategory(id: $id, input: $input) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTopic($input: createTopicInput!) {\n    createTopic(input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTopic($input: createTopicInput!) {\n    createTopic(input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteTopic($id: ID!) {\n    deleteTopic(id: $id) {\n      id\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTopic($id: ID!) {\n    deleteTopic(id: $id) {\n      id\n      title\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateTopic($id: ID!, $input: updateTopicInput!) {\n    updateTopic(id: $id, input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTopic($id: ID!, $input: updateTopicInput!) {\n    updateTopic(id: $id, input: $input) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Category_By_Id($id: ID!) {\n    categoryById(id: $id) {\n      id\n      name\n      abbr\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query Category_By_Id($id: ID!) {\n    categoryById(id: $id) {\n      id\n      name\n      abbr\n      order\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CategoryAll {\n    categoryAll {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query CategoryAll {\n    categoryAll {\n      id\n      name\n      abbr\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CategoryInfo on Category {\n    id\n    name\n    abbr\n    order\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment CategoryInfo on Category {\n    id\n    name\n    abbr\n    order\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SubCategoryById($id: ID!) {\n    subCategoryById(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query SubCategoryById($id: ID!) {\n    subCategoryById(id: $id) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SubCategoryByCategory($categoryId: ID!) {\n    subCategoryByCategory(categoryId: $categoryId) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query SubCategoryByCategory($categoryId: ID!) {\n    subCategoryByCategory(categoryId: $categoryId) {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SubCategoryAll {\n    subCategoryAll {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query SubCategoryAll {\n    subCategoryAll {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment SubCategoryInfo on SubCategory {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  "): (typeof documents)["\n    fragment SubCategoryInfo on SubCategory {\n      id\n      name\n      order\n      createdAt\n      updatedAt\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopicById($id: ID!) {\n    topicById(id: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\t\t\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  query TopicById($id: ID!) {\n    topicById(id: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\t\t\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopicByCategory($id: ID!) {\n    topicByCategory(categoryId: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  query TopicByCategory($id: ID!) {\n    topicByCategory(categoryId: $id) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopicByCategoryAbbr($abbr: String!) {\n    topicByCategoryAbbr(abbr: $abbr) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  query TopicByCategoryAbbr($abbr: String!) {\n    topicByCategoryAbbr(abbr: $abbr) {\n      id\n      title\n      url\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TopicAll {\n    topicAll {\n      id\n      title\n      url\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"): (typeof documents)["\n  query TopicAll {\n    topicAll {\n      id\n      title\n      url\n      createdAt\n      updatedAt\n      category {\n\t\tid\n\t\tname\n\t\tabbr\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      subCategory {\n\t\tid\n\t\tname\n\t\torder\n\t\tcreatedAt\n\t\tupdatedAt\n      }\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CurrentWeatherByCity($city: String!, $unit: Units) {\n    currentWeatherByCity(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      weather {\n        dt\n        condition\n        description\n        feelsLike\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n      }\n    }\n  }\n"): (typeof documents)["\n  query CurrentWeatherByCity($city: String!, $unit: Units) {\n    currentWeatherByCity(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      weather {\n        dt\n        condition\n        description\n        feelsLike\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DailyForecast($city: String!, $unit: Units) {\n    dailyForecast(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      forecastList {\n        dt\n        condition\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n        wind\n        rain\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyForecast($city: String!, $unit: Units) {\n    dailyForecast(city: $city, unit: $unit) {\n      id\n      cityInfo {\n\t\tname\n\t\tcountry\n\t\tlat\n\t\tlon\n      }\n      forecastList {\n        dt\n        condition\n        icon\n        temperature {\n\t\t\tday\n\t\t\tmin\n\t\t\tmax\n        }\n        humidity\n        wind\n        rain\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment temperature on Temperature {\n      day\n      min\n      max\n    }\n  "): (typeof documents)["\n    fragment temperature on Temperature {\n      day\n      min\n      max\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment cityInfo on CityInfo {\n      name\n      country\n      lat\n      lon\n    }\n  "): (typeof documents)["\n    fragment cityInfo on CityInfo {\n      name\n      country\n      lat\n      lon\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;