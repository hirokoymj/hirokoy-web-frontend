import { useQuery } from '@apollo/client';
import { format } from 'date-fns';

import { CATEGORY_ALL } from 'queries/Category';
import { CategoryAllData } from 'pages/type/types';
import { Table } from 'components/Tables/Table';
import { ActionRouterButton } from 'components/Buttons/ActionRouterButton';
import { ActionButton } from 'components/Buttons/ActionButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface CategoryTableProps {
  openDialog: (id: string) => void;
}

export const CategoryTable = ({ openDialog }: CategoryTableProps) => {
  const { data, loading, error } = useQuery<CategoryAllData>(CATEGORY_ALL);
  console.log(data);

  if (error) return <p>Error : {error.message}</p>;

  const mappedData =
    data &&
    data.categoryAll.map(({ id, name, abbr, createdAt, updatedAt }) => {
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={mappedData as any}
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
      )}
    </div>
  );
};
