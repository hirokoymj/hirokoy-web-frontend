export interface Category {
  id: string;
  name: string;
  abbr: string;
  createdAt: number;
  updatedAt: number;
}

export type CategoryAllData = {
  categoryAll: Category[];
};
export type CategoryByIdData = {
  categoryById: Category;
};
export type CreateCategoryData = {
  createCategory: Category;
};

//=====SubCategory
export interface SubCategoryFormValues {
  categoryId: string;
  name: string;
  order: string;
}

export interface SubCategory {
  id: string;
  name: string;
  order: string;
  createdAt: number;
  updatedAt: number;
  category: Category;
}

export type subCategoryByIdAllData = {
  subCategoryAll: SubCategory[];
};
export type SubCategoryByIdData = {
  subCategoryById: SubCategory;
};
export type SubCategoryByCategoryData = {
  subCategoryByCategory: SubCategory;
};
export type CreateSubCategoryData = {
  createSubCategory: SubCategory;
};

export interface DropdownOption {
  //After it should be rename DropdownItem.
  value: string;
  label: string;
}

//=====Topic
export interface TopicFormValues {
  category: string;
  subCategory: string;
  title: string;
  url: string;
  order?: string;
}

export interface Topic {
  id: string;
  title: string;
  url: string;
  createdAt: number;
  updatedAt: number;
  category: Category;
  subCategory: SubCategory;
  order?: number;
}
export type TopicByIdData = {
  topicById: Topic;
};
export type TopicByIdCategoryData = {
  topicByCategory: Topic;
};
export type TopicByIdCategoryAbbrData = {
  topicByCategoryAbbr: Topic;
};
export type TopicAllData = {
  topicAll: Topic[];
};
export type CreateTopicData = {
  createTopic: Topic;
};
