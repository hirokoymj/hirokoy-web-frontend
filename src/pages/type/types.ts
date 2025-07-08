//path=":city"
//path=":categoryId"
//path=":abbr"
//path=":topicId/:categoryId"
export type RouteParams = 'city' | 'categoryId' | 'abbr' | 'topicId' | 'subCategoryId';

//=====Category
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
export type CategoryFormValues = {
  name: string;
  abbr: string;
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

//=====Weather Info
export type Temperature = {
  day: number;
  min: number;
  max: number;
};
export type CityInfo = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};
export type Weather = {
  dt: number;
  condition: string;
  description: string;
  feelsLike: string;
  icon: string;
  temperature: Temperature;
  humidity: number;
};
export type Forecast = {
  dt: number;
  condition: string;
  icon: string;
  temperature: Temperature;
  humidity: number;
  wind: number;
  rain: number;
};
export type Current_Weather_By_CityData = {
  currentWeatherByCity: {
    id: string;
    cityInfo: CityInfo;
    weather: Weather;
  };
};
export type Daily_ForcastData = {
  dailyForecast: { id: string; cityInfo: CityInfo; forecastList: [] };
};
