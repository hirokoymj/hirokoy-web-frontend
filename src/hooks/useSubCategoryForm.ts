import { useQuery, useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';

import { CREATE_SUB_CATEGORY } from 'mutations/SubCategory';
import { SUB_CATEGORY_ALL } from 'queries/SubCategory';
import { CATEGORY_ALL } from 'queries/Category';
import { makeDropdownOptions } from 'components/FormController/common';
import { CategoryAllData, CreateCategoryData, SubCategoryFormValues } from 'pages/type/types';

export const useSubCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createSubCategory] = useMutation<CreateCategoryData>(CREATE_SUB_CATEGORY, {
    refetchQueries: [SUB_CATEGORY_ALL],
  });

  const { data, loading } = useQuery<CategoryAllData>(CATEGORY_ALL);
  const category_options = makeDropdownOptions(data, 'categoryAll', loading);

  const onSubmit = async (values: SubCategoryFormValues) => {
    try {
      const { name, categoryId, order } = values;
      await createSubCategory({
        variables: {
          input: {
            name,
            category: categoryId,
            order: order && parseInt(order),
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
