import { useQuery, useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';

import { CREATE_TOPIC } from '../mutations/Topic';
import { CATEGORY_ALL } from '../queries/Category';
import { TOPIC_ALL } from '../queries/Topic';
import { SUB_CATEGORY_BY_CATEGORY } from '../queries/SubCategory';
import { makeDropdownOptions } from '../components/FormController/common';
import { TopicFormValues } from '../pages/type/types';

export const useTopicForm = (categoryId: string) => {
  const [createTopic] = useMutation(CREATE_TOPIC, {
    refetchQueries: [TOPIC_ALL],
  });
  const { data, loading } = useQuery(CATEGORY_ALL);
  const { data: subCategoryData, loading: subCategoryLoading } = useQuery(SUB_CATEGORY_BY_CATEGORY, {
    variables: {
      categoryId,
    },
  });

  const category_options = makeDropdownOptions(data, 'categoryAll', loading);
  const subCategory_options = makeDropdownOptions(subCategoryData, 'subCategoryByCategory', subCategoryLoading);

  const onSubmit: SubmitHandler<TopicFormValues> = async (values) => {
    try {
      await createTopic({
        variables: {
          input: {
            ...values,
            order: values.order ? parseInt(values.order, 10) : undefined,
          },
        },
        onCompleted: (data) => {
          const title = data?.createTopic?.title;
          enqueueSnackbar(`A new topic - ${title} has been created.`, {
            variant: 'success',
          });
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const defaultValues = {
    category: '',
    subCategory: '',
    url: '',
    title: '',
    order: '', // <input type=number> type is number but string.
  };

  return {
    onSubmit,
    category_options,
    loading: loading || subCategoryLoading,
    defaultValues,
    subCategory_options,
  };
};
