import { useQuery, useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';

import { CREATE_SUB_CATEGORY } from '../mutations/SubCategory';
import { SUB_CATEGORY_ALL } from '../queries/SubCategory';
import { CATEGORY_ALL } from '../queries/Category';
import { makeDropdownOptions } from '../components/FormController/common';
import { SubCategoryFormValues } from '../pages/type/types';

export const useSubCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createSubCategory] = useMutation(CREATE_SUB_CATEGORY, {
    refetchQueries: [SUB_CATEGORY_ALL],
  });

  const { data, loading } = useQuery(CATEGORY_ALL);
  const category_options = makeDropdownOptions(data, 'categoryAll', loading);

  const onSubmit: SubmitHandler<SubCategoryFormValues> = async (values) => {
    try {
      const { name, categoryId, order } = values;
      await createSubCategory({
        variables: {
          input: {
            name,
            category: categoryId,
            order: parseInt(order),
          },
        },
      });
      enqueueSnackbar('New sub category has been created!', {
        variant: 'success',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onSubmit,
    category_options,
    loading,
  } as const;
};
