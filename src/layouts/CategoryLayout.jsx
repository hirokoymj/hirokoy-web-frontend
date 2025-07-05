import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { CategoryTable } from "pages/category/CategoryTable";
import { AlertDialog } from "components/Dialog/AlertDialog";
import { Title } from "components/Titles/Title";
import { CategoryForm } from "pages/category/CategoryForm";
import { DELETE_CATEGORY } from "mutations/Category";
import { CATEGORY_ALL } from "queries/Category";

export const CategoryLayout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [CATEGORY_ALL],
  });

  const handleClose = () => setOpen(false);

  const handleOpen = (id) => {
    setCategoryId(id);
    setOpen(true);
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory({
        variables: {
          id: categoryId,
        },
      });
      enqueueSnackbar("Category successfully deleted!", {
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
          <Title text="Create Category" />
          <Paper>
            <CategoryForm />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Container maxWidth="lg">
              <CategoryTable openDialog={handleOpen} />
            </Container>
          </Paper>
        </Grid>
      </Grid>
      <AlertDialog
        open={open}
        onClose={handleClose}
        title="Delete Category"
        content={
          <>
            <Typography component="p" variant="body1">
              Are you sure to delete the category?
            </Typography>
          </>
        }
        actionLabel="Delete"
        action={handleDeleteCategory}
        cancelLabel="Cancel"
        cancel={handleClose}
      />
    </Container>
  );
};
