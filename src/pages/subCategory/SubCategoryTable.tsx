import { useQuery } from '@apollo/client';
import get from 'lodash/get';
import map from 'lodash/map';
import { format } from 'date-fns';

import { SUB_CATEGORY_ALL } from '../../queries/SubCategory';
import { Table } from '../../components/Tables/Table';
import { ActionRouterButton } from '../../components/Buttons/ActionRouterButton';
import { ActionButton } from '../../components/Buttons/ActionButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface SubCategoryTableProps {
  openDialog: (id: string) => void;
}

export const SubCategoryTable = ({ openDialog }: SubCategoryTableProps) => {
  const { data, loading, error } = useQuery(SUB_CATEGORY_ALL);

  if (loading) return 'Loading...';
  if (error) return <p>Error : {error.message}</p>;

  //  const subCategoryData = !loading && get(data, 'subCategoryAll', []);
  const subCategoryData = data && get(data, 'subCategoryAll', []);
  const mappedData = map(subCategoryData, ({ id, name, order, category, createdAt, updatedAt }) => {
    const categoryId = get(category, 'id', '');
    const categoryName = get(category, 'name', '');
    const actions = (
      <>
        <ActionRouterButton to={`/subCategory/${id}`}>
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
      order,
      categoryId,
      categoryName,
      actions,
      created,
      updated,
    };
  });

  return (
    <Table
      data={mappedData}
      loading={loading}
      columns={[
        {
          label: 'Sub Category',
          field: 'name',
        },
        {
          label: 'Category',
          field: 'categoryName',
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
  );
};
