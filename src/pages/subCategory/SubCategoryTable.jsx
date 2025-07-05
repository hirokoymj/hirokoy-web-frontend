import React from "react";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import map from "lodash/map";
import { format } from "date-fns";

import { SUB_CATEGORY_ALL } from "queries/SubCategory";
import { Table } from "components/Tables/Table";
import { ActionRouterButton } from "components/Buttons/ActionRouterButton";
import { ActionButton } from "components/Buttons/ActionButton";

export const SubCategoryTable = ({ openDialog }) => {
  const { data, loading, error } = useQuery(SUB_CATEGORY_ALL);

  if (error) return <p>Error : {error.message}</p>;

  const subCategoryData = !loading && get(data, "subCategoryAll", []);
  const mappedData = map(
    subCategoryData,
    ({ id, name, order, category, createdAt, updatedAt }) => {
      const categoryId = get(category, "id", "");
      const categoryName = get(category, "name", "");
      const actions = (
        <>
          <ActionRouterButton
            to={`/subCategory/${id}`}
            title="Edit Sub Category"
            icon="edit"
          />
          <ActionButton onClick={() => openDialog(id)} icon="delete" />
        </>
      );
      const created = format(new Date(createdAt), "MM/dd/yyyy");
      const updated = format(new Date(updatedAt), "MM/dd/yyyy");

      return {
        id,
        name,
        order,
        categoryId,
        categoryName,
        actions,
        created,
        updated,
      };
    }
  );

  return (
    <Table
      data={mappedData}
      loading={loading}
      colmuns={[
        {
          label: "Sub Category",
          field: "name",
        },
        {
          label: "Category",
          field: "categoryName",
        },
        {
          label: "Order",
          field: "order",
        },
        {
          label: "Created",
          field: "created",
        },
        {
          label: "Updated",
          field: "updated",
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
