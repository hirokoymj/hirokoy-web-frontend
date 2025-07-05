import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSnackbar } from "notistack";

import { SubCategoryTable } from "pages/subCategory/SubCategoryTable";
import { AlertDialog } from "components/Dialog/AlertDialog";
import { DELETE_SUB_CATEGORY } from "mutations/SubCategory";
import { SUB_CATEGORY_ALL } from "queries/SubCategory";
import { SubCategoryForm } from "pages/subCategory/SubCategoryForm";
import { Title } from "components/Titles/Title";

export const SubCategoryLayout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState("");
  const [deleteSubCategory] = useMutation(DELETE_SUB_CATEGORY, {
    refetchQueries: [SUB_CATEGORY_ALL],
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setSubCategoryId(id);
    setOpen(true);
  };

  const handleDeleteSubCategory = async () => {
    try {
      await deleteSubCategory({
        variables: {
          id: subCategoryId,
        },
      });
      enqueueSnackbar("Sub Category successfully deleted!", {
        variant: "success",
      });
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="lg">
      <Outlet />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Title text="Create Subcategory" />
          <Paper>{<SubCategoryForm />}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Container maxWidth="lg">
              <SubCategoryTable openDialog={handleOpen} />
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <AlertDialog
        open={open}
        onClose={handleClose}
        title="Delete Sub Category"
        content={
          <>
            <Typography component="p" variant="body1">
              Are you sure to delete the sub category?
            </Typography>
          </>
        }
        actionLabel="Delete"
        action={handleDeleteSubCategory}
        cancelLabel="Cancel"
        cancel={handleClose}
      />
    </Container>
  );
};
