import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Grid, Container } from '@mui/material';

import { categoryFormSchema, CategoryFormValues } from 'pages/validation/formValidations';
import { useCategoryForm } from 'hooks/useCategoryForm';
import { FormInputText } from 'components/Forms/FormInputText';

export const CategoryForm = () => {
  const methods = useForm<CategoryFormValues>({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: { name: '', abbr: '' },
  });
  const { onSubmit } = useCategoryForm();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Container maxWidth="xs" style={{ padding: '24px' }}>
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <FormInputText label="Category name" name="name" />
          </Grid>
          <Grid size={12}>
            <FormInputText label="Abbreviation" name="abbr" />
          </Grid>
          <Grid size={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};
