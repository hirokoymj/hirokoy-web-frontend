import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TopicEditForm } from "pages/topic/TopicEditForm";
import { SimpleDrawer } from "components/Dialog/SimpleDrawer";
import { useTopicEditForm } from "hooks/useTopicEditForm";

export const TopicEditView = () => {
  const { topicId } = useParams();
  const { categoryId } = useParams();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const {
    loading,
    category_options,
    subCategory_options,
    onSubmit,
    defaultValues,
  } = useTopicEditForm(topicId, categoryId);

  const onClose = () => {
    setOpen(false);
    navigate("/topic");
  };

  return (
    <>
      {loading ? (
        <p>....loading</p>
      ) : (
        <SimpleDrawer
          open={open}
          title="Edit Topic Link"
          onClose={onClose}
          submitLabel="Edit">
          <TopicEditForm
            onSubmit={onSubmit}
            category_options={category_options}
            subCategory_options={subCategory_options}
            defaultValues={defaultValues}
            loading={loading}
          />
        </SimpleDrawer>
      )}
    </>
  );
};
