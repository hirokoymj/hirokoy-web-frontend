import { useQuery } from '@apollo/client';
import { format } from 'date-fns';

import { CATEGORY_ALL } from '../../queries/Category';
import { Table } from '../../components/Tables/Table';
import { ActionRouterButton } from '../../components/Buttons/ActionRouterButton';
import { ActionButton } from '../../components/Buttons/ActionButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { QueryResult } from '../../components/query-result';

interface CategoryTableProps {
  openDialog: (id: string) => void;
}

export const CategoryTable = ({ openDialog }: CategoryTableProps) => {
  const { data, loading, error } = useQuery(CATEGORY_ALL);

  const mappedData =
    !loading &&
    data?.categoryAll?.map(({ id, name, abbr, createdAt, updatedAt }) => {
      const actions = (
        <>
          <ActionRouterButton to={`/category/${id}`}>
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
        name,
        abbr,
        created,
        updated,
        actions,
      };
    });

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Table
        data={mappedData}
        loading={loading}
        columns={[
          {
            label: 'Category',
            field: 'name',
          },
          {
            label: 'Abbreviation',
            field: 'abbr',
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
