import { QueryOptions, useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

import { CREATE_CATEGORY } from 'mutations/Category';
import { CATEGORY_ALL } from 'queries/Category';
import { CategoryFormValues } from 'pages/validation/formValidations';
import { CategoryAllData, CreateCategoryData } from 'pages/category/types';

export const useCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createCategory] = useMutation<CreateCategoryData>(CREATE_CATEGORY, {
    refetchQueries: [{ query: CATEGORY_ALL } as QueryOptions<CategoryAllData>],
  });

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      await createCategory({
        variables: {
          input: {
            ...values,
          },
        },
      });
      enqueueSnackbar('New category has been created!', {
        variant: 'success',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onSubmit,
  };
};
