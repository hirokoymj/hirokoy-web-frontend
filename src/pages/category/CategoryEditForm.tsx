import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { categoryFormSchema } from 'pages/validation/formValidations';
import { FormInputText } from 'components/Forms/FormInputText';
import { CategoryFormValues } from 'pages/type/types';

interface CategoryEditFormProps {
  onSubmit: (values: CategoryFormValues) => void;
  initialValues: any; //!!FIX LATER!!
  loading: boolean;
}

export const CategoryEditForm: React.FC<CategoryEditFormProps> = ({ onSubmit, initialValues, loading }) => {
  const methods = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: !loading && initialValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Grid container direction="column" spacing={3}>
      <FormProvider {...methods}>
        <Grid size={12}>
          <FormInputText label="Name" name="name" />
        </Grid>
        <Grid size={12}>
          <FormInputText label="Abbreviation" name="abbr" />
        </Grid>
        <Grid size={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
            Edit
          </Button>
        </Grid>
      </FormProvider>
    </Grid>
  );
};
