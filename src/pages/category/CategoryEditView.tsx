import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { SimpleDrawer } from 'components/Dialog/SimpleDrawer';
import { CategoryEditForm } from 'pages/category/CategoryEditForm';
import { useCategoryEditForm } from 'hooks/useCategoryEditForm';

export const CategoryEditView = () => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const { onSubmit, initialValues, loading, error } = useCategoryEditForm(id!);

  const onClose = () => {
    setOpen(false);
    navigate('/category');
  };

  if (error) <p>Page error</p>;

  return (
    <div>
      {loading ? (
        <p>...loading</p>
      ) : (
        <SimpleDrawer open={open} title="Edit Category" onClose={onClose} /*submitLabel="Edit"*/>
          <CategoryEditForm onSubmit={onSubmit} initialValues={initialValues} loading={loading} />
        </SimpleDrawer>
      )}
    </div>
  );
};
