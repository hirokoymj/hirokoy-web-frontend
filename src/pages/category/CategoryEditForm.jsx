import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import { categoryFormSchema } from "../validation/formValidations";
import { FormInputText } from "components/Forms/FormInputText";

export const CategoryEditForm = (props) => {
  const { onSubmit, initialValues, loading } = props;
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
        <Grid item xs={12}>
          <FormInputText label="Name" name="name" />
        </Grid>
        <Grid item>
          <FormInputText label="Abbreviation" name="abbr" />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit(onSubmit)}>
            Edit
          </Button>
        </Grid>
      </FormProvider>
    </Grid>
  );
};
