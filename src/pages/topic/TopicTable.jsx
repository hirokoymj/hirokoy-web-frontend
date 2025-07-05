import React from "react";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import map from "lodash/map";
import Link from "@material-ui/core/Link";

import { TOPIC_ALL } from "queries/Topic";
import { Table } from "components/Tables/Table";
import { ActionRouterButton } from "components/Buttons/ActionRouterButton";
import { ActionButton } from "components/Buttons/ActionButton";

export const TopicTable = ({ openDialog }) => {
  const { data, loading, error } = useQuery(TOPIC_ALL);

  if (error) return <p>Error : {error.message}</p>;

  const topic_data = !loading && get(data, "topicAll", []);
  const mappedData = map(
    topic_data,
    ({ id, title, url, category, subCategory, order }) => {
      const categoryName = get(category, "name", "");
      const subCategoryName = get(subCategory, "name", "");
      const categoryId = get(category, "id", "");

      const titleLink = (
        <Link
          href={url}
          variant="body2"
          target="_blank"
          rel="noreferrer"
          color="secondary">
          {title}
        </Link>
      );

      const actions = (
        <>
          <ActionRouterButton
            to={`/topic/${id}/${categoryId}`}
            title="Edit Topic"
            icon="edit"
          />
          <ActionButton onClick={() => openDialog(id)} icon="delete" />
        </>
      );

      return {
        id,
        titleLink,
        url,
        categoryName,
        subCategoryName,
        actions,
        order,
      };
    }
  );

  return (
    <Table
      data={mappedData}
      loading={loading}
      hover={true}
      colmuns={[
        {
          label: "Category",
          field: "categoryName",
        },
        {
          label: "Sub Category",
          field: "subCategoryName",
        },
        {
          label: "Title",
          field: "titleLink",
        },
        {
          label: "Order",
          field: "order",
        },
        {
          label: "Actions",
          field: "actions",
          align: "center",
        },
      ]}
    />
  );
};
