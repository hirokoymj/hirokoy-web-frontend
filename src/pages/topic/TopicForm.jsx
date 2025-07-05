import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";

import { topicFormSchema } from "pages/validation/formValidations";
import { useTopicForm } from "hooks/useTopicForm";
import { FormInputText } from "components/Forms/FormInputText";
import { FormInputDropdown } from "components/Forms/FormInputDropdown";

export const TopicForm = () => {
  const methods = useForm({
    resolver: yupResolver(topicFormSchema),
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;
  const [categoryId, setCategoryId] = useState("");
  const {
    loading,
    category_options,
    onSubmit,
    subCategory_options,
    defaultValues,
  } = useTopicForm(categoryId);

  useEffect(() => {
    if (isSubmitSuccessful) reset({ ...defaultValues });
  }, [isSubmitSuccessful, reset, defaultValues]);

  const handleCategoryChange = (event) => {
    const newVal = event.target.value;
    setCategoryId(newVal);
  };

  return (
    <Container maxWidth="xs" style={{ padding: "24px" }}>
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInputDropdown
              name="category"
              label="Category"
              options={category_options}
              handleChange={handleCategoryChange}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputDropdown
              name="subCategory"
              label="Sub Category"
              options={subCategory_options}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText label="Title" name="title" />
          </Grid>
          <Grid item xs={12}>
            <FormInputText label="URL" name="url" />
          </Grid>
          <Grid item xs={6}>
            <FormInputText label="order" name="order" type="number" />
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
