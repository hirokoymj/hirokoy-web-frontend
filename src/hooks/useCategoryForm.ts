import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';

import { CREATE_CATEGORY } from 'mutations/Category';
import { CATEGORY_ALL } from 'queries/Category';
import { CategoryFormValues } from 'pages/type/types';

export const useCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createCategory] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [{ query: CATEGORY_ALL }],
  });

  const onSubmit: SubmitHandler<CategoryFormValues> = async (values) => {
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
