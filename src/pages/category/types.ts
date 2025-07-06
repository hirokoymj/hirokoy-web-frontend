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
  value: string;
  label: string;
}
