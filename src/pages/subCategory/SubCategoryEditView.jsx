import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SimpleDrawer } from "components/Dialog/SimpleDrawer";
import { SubCategoryEditForm } from "./SubCategoryEditForm";
import { useSubCategoryEditForm } from "hooks/useSubCategoryEditForm";

export const SubCategoryEditView = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const { onSubmit, initialValues, loading, category_options } =
    useSubCategoryEditForm(id);

  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
    navigate("/subCategory");
  };
  if (!loading) console.log(initialValues);

  return (
    <>
      {loading ? (
        <p>...loading</p>
      ) : (
        <SimpleDrawer
          open={open}
          title="Edit Subcategory"
          onClose={onClose}
          submitLabel="Edit">
          <SubCategoryEditForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            loading={loading}
            category_options={category_options}
          />
        </SimpleDrawer>
      )}
    </>
  );
};
