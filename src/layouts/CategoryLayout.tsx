import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { CategoryTable } from 'pages/category/CategoryTable';
import { AlertDialog } from 'components/Dialog/AlertDialog';
import { Title } from 'components/Titles/Title';
import { CategoryForm } from 'pages/category/CategoryForm';
import { DELETE_CATEGORY } from 'mutations/Category';
import { CATEGORY_ALL } from 'queries/Category';

export const CategoryLayout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<string>('');
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [CATEGORY_ALL],
  });

  const handleClose = () => setOpen(false);

  const handleOpen = (id: string) => {
    setCategoryId(id);
    setOpen(true);
  };

  const handleDeleteCategory = async () => {
    console.log('handleDeleteCategory: ' + categoryId);
    try {
      await deleteCategory({
        variables: {
          id: categoryId,
        },
      });
      enqueueSnackbar('Category successfully deleted!', {
        variant: 'success',
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
        <Grid size={12}>
          <Title text="Create Category" />
          <Paper>
            <CategoryForm />
          </Paper>
        </Grid>
        <Grid size={12}>
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
