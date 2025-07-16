import { useQuery, useMutation } from '@apollo/client';
import get from 'lodash/get';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

import { UPDATE_SUB_CATEGORY } from '../mutations/SubCategory';
import { SUB_CATEGORY_BY_ID } from '../queries/SubCategory';
import { CATEGORY_ALL } from '../queries/Category';
import { SubCategoryFormValues, Category, DropdownOption } from '../pages/type/types';

export const useSubCategoryEditForm = (subCategoryId = '') => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [updateSubCategory] = useMutation(UPDATE_SUB_CATEGORY);
  const { data, loading } = useQuery(CATEGORY_ALL);
  const { data: data_sub_category, loading: loading_sub_category } = useQuery(SUB_CATEGORY_BY_ID, {
    variables: {
      id: subCategoryId,
    },
  });

  const initialValues = !loading_sub_category && {
    categoryId: get(data_sub_category, 'subCategoryById.category.id', ''),
    name: get(data_sub_category, 'subCategoryById.name', ''),
    order: get(data_sub_category, 'subCategoryById.order', 1),
  };

  const categories: Category[] = !loading ? (get(data, 'categoryAll', []) as Category[]) : [];
  const category_options: DropdownOption[] = categories.map(({ id, name }) => {
    return { value: id, label: name };
  });

  const onSubmit: SubmitHandler<SubCategoryFormValues> = async (values) => {
    try {
      const { name, categoryId, order } = values;
      await updateSubCategory({
        variables: {
          id: subCategoryId,
          input: {
            name,
            category: categoryId,
            order: parseInt(order),
          },
        },
      });
      enqueueSnackbar('Sub Category successfully updated!', {
        variant: 'success',
      });
      navigate('/subCategory');
    } catch (e) {
      console.error(e);
      enqueueSnackbar('Failed to update sub category', {
        variant: 'error',
      });
    }
  };

  return {
    onSubmit,
    category_options,
    initialValues,
    loading: loading || loading_sub_category,
  } as const;
};
