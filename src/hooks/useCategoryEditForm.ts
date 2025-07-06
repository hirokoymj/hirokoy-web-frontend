import { useQuery, useMutation } from '@apollo/client';
import get from 'lodash/get';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { UPDATE_CATEGORY } from 'mutations/Category';
import { CATEGORY_BY_ID } from 'queries/Category';
import { CATEGORY_ALL } from 'queries/Category';
import { CategoryByIdData } from 'pages/category/types';
import { CategoryFormValues } from 'pages/validation/formValidations';

export const useCategoryEditForm = (id: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [updateCategory, { error }] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [CATEGORY_ALL],
  });
  const {
    data,
    loading,
    error: error_category_by_id,
  } = useQuery<CategoryByIdData>(CATEGORY_BY_ID, {
    variables: {
      id,
    },
  });

  if (!loading) console.log(data);
  const initialValues = !loading && {
    name: get(data, 'categoryById.name', ''),
    abbr: get(data, 'categoryById.abbr', ''),
  };

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      const { name, abbr } = values;
      await updateCategory({
        variables: {
          id,
          input: {
            name,
            abbr,
          },
        },
      });
      enqueueSnackbar('Category successfully updated!', {
        variant: 'success',
      });
      navigate('/category');
    } catch (e) {
      console.error(e);
      enqueueSnackbar('Failed to update category', {
        variant: 'error',
      });
    }
  };

  return {
    onSubmit,
    initialValues,
    loading,
    error: error || error_category_by_id,
  };
};
