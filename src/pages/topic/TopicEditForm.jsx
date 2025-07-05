import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import { topicFormSchema } from "pages/validation/formValidations";
import { FormInputDropdown } from "components/Forms/FormInputDropdown";
import { FormInputText } from "components/Forms/FormInputText";

export const TopicEditForm = (props) => {
  const {
    onSubmit,
    category_options,
    subCategory_options,
    defaultValues,
    loading,
  } = props;

  const methods = useForm({
    resolver: yupResolver(topicFormSchema),
    defaultValues: defaultValues,
  });

  return (
    <Grid container direction="column" spacing={3}>
      <FormProvider {...methods}>
        <Grid item>
          <FormInputDropdown
            name="category"
            label="Category"
            options={category_options}
            disabled={loading}
            readOnly
          />
        </Grid>
        <Grid item>
          <FormInputDropdown
            name="subCategory"
            label="Sub Category"
            disabled={loading}
            options={subCategory_options}
          />
        </Grid>
        <Grid item>
          <FormInputText label="Title" name="title" />
        </Grid>
        <Grid item>
          <FormInputText label="URL" name="url" />
        </Grid>
        <Grid item>
          <FormInputText label="order" name="order" type="number" />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={methods.handleSubmit(onSubmit)}>
            Edit
          </Button>
        </Grid>
      </FormProvider>
    </Grid>
  );
};
