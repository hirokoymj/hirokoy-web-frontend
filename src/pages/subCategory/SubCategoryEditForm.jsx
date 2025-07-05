import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";

import { subCategoryFormSchema } from "../validation/formValidations";
import { FormInputText } from "components/Forms/FormInputText";
import { FormInputDropdown } from "components/Forms/FormInputDropdown";

export const SubCategoryEditForm = (props) => {
  const { onSubmit, category_options, initialValues } = props;
  const methods = useForm({
    resolver: yupResolver(subCategoryFormSchema),
    defaultValues: initialValues,
  });
  const { handleSubmit } = methods;

  return (
    <Grid container direction="column" spacing={3}>
      <FormProvider {...methods}>
        <Grid item xs={12}>
          <FormInputDropdown
            name="categoryId"
            label="Category"
            options={category_options}
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
            Edit
          </Button>
        </Grid>
      </FormProvider>
    </Grid>
  );
};
