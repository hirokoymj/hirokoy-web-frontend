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
