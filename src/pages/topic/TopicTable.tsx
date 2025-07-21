import { useQuery } from '@apollo/client';
import get from 'lodash/get';
import { format } from 'date-fns';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TOPIC_ALL } from '../../queries/Topic';
import { Table } from '../../components/Tables/Table';
import { ActionRouterButton } from '../../components/Buttons/ActionRouterButton';
import { ActionButton } from '../../components/Buttons/ActionButton';
import { QueryResult } from '../../components/query-result';

interface TopicTableProps {
  openDialog: (id: string) => void;
}

export const TopicTable = ({ openDialog }: TopicTableProps) => {
  const { data, loading, error } = useQuery(TOPIC_ALL);

  const mappedData =
    !loading &&
    data?.topicAll?.map(({ id, title, url, category, subCategory, order, createdAt, updatedAt }) => {
      const categoryName = get(category, 'name', '');
      const subCategoryName = get(subCategory, 'name', '');
      const categoryId = get(category, 'id', '');

      const titleLink = (
        <Link href={url} variant="body2" target="_blank" rel="noreferrer" color="secondary">
          {title}
        </Link>
      );

      const actions = (
        <>
          <ActionRouterButton to={`/topic/${id}/${categoryId}`}>
            <EditIcon style={{ color: 'white' }} />
          </ActionRouterButton>
          <ActionButton onClick={() => openDialog(id)}>
            <DeleteIcon style={{ color: 'white' }} />
          </ActionButton>
        </>
      );
      const created = format(new Date(createdAt), 'MM/dd/yyyy');
      const updated = format(new Date(updatedAt), 'MM/dd/yyyy');

      return {
        id,
        titleLink,
        url,
        categoryName,
        subCategoryName,
        actions,
        order,
        created,
        updated,
      };
    });

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Table
        data={mappedData}
        loading={loading}
        hover={true}
        columns={[
          {
            label: 'Category',
            field: 'categoryName',
          },
          {
            label: 'Sub Category',
            field: 'subCategoryName',
          },
          {
            label: 'Title',
            field: 'titleLink',
          },
          {
            label: 'Order',
            field: 'order',
          },
          {
            label: 'Created',
            field: 'created',
          },
          {
            label: 'Updated',
            field: 'updated',
          },
          {
            label: 'Actions',
            field: 'actions',
            align: 'center',
          },
        ]}
      />
    </QueryResult>
  );
};
