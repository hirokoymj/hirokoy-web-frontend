import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";

import { subCategoryFormSchema } from "../validation/formValidations";
import { useSubCategoryForm } from "hooks/useSubCategoryForm";
import { FormInputText } from "components/Forms/FormInputText";
import { FormInputDropdown } from "components/Forms/FormInputDropdown";

export const SubCategoryForm = () => {
  const { onSubmit, category_options, loading } = useSubCategoryForm();
  const methods = useForm({
    resolver: yupResolver(subCategoryFormSchema),
    defaultValues: {
      categoryId: "",
      name: "",
      order: "",
    },
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
    <Container maxWidth="xs" style={{ padding: "24px" }}>
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInputDropdown
              name="categoryId"
              label="Category"
              options={category_options}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText label="Sub Category Name" name="name" />
          </Grid>
          <Grid item xs={12}>
            <FormInputText label="Order" name="order" type="number" />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};
