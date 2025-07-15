import { useQuery, useMutation } from '@apollo/client';
import get from 'lodash/get';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';

import { UPDATE_TOPIC } from 'mutations/Topic';
import { CATEGORY_ALL } from 'queries/Category';
import { TOPIC_BY_ID } from 'queries/Topic';
import { SUB_CATEGORY_BY_CATEGORY } from 'queries/SubCategory';
import { makeDropdownOptions } from 'components/FormController/common';
import { TopicFormValues } from 'pages/type/types';

export const useTopicEditForm = (topicId = '', categoryId = '') => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [updateTopic] = useMutation(UPDATE_TOPIC);
  const { data, loading } = useQuery(CATEGORY_ALL);
  const { data: subCategoryData, loading: subCategoryLoading } = useQuery(SUB_CATEGORY_BY_CATEGORY, {
    variables: {
      categoryId,
    },
  });

  const { data: topicData, loading: topicLoading } = useQuery(TOPIC_BY_ID, {
    variables: {
      id: topicId,
    },
  });

  const defaultValues = !topicLoading && {
    title: get(topicData, 'topicById.title', ''),
    url: get(topicData, 'topicById.url', ''),
    category: get(topicData, 'topicById.category.id', ''),
    subCategory: get(topicData, 'topicById.subCategory.id', ''),
    order: get(topicData, 'topicById.order', 0),
  };

  const category_options = makeDropdownOptions(data, 'categoryAll', loading);
  const subCategory_options = makeDropdownOptions(subCategoryData, 'subCategoryByCategory', subCategoryLoading);

  const onSubmit: SubmitHandler<TopicFormValues> = async (values) => {
    try {
      await updateTopic({
        variables: {
          id: topicId,
          input: {
            ...values,
            order: values.order ? parseInt(values.order, 10) : 0,
          },
        },
      });
      enqueueSnackbar('Topic successfully updated!', {
        variant: 'success',
      });
      navigate('/topic');
    } catch (e) {
      console.error(e);
      enqueueSnackbar('Faild to update Topic.', {
        variant: 'error',
      });
    }
  };

  return {
    onSubmit,
    category_options,
    subCategory_options,
    defaultValues,
    loading: loading || subCategoryLoading || topicLoading,
  } as const;
};
