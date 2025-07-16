import { default as MuiTable } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TableSkeleton } from '../Skeleton/LoadingSkeleton';

interface TableProps<T extends Record<string, any>> {
  data: T[]; // Array of data objects
  columns: Column[]; // Array of column definitions
  loading: boolean;
  hover?: boolean; // Optional prop
}
type Column = {
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  field: string;
};

export const Table = <T extends Record<string, any>>({ data, columns, loading, hover }: TableProps<T>) => {
  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <>
          <MuiTable aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                {columns.map(({ label, align }, key) => {
                  return (
                    <TableCell key={key} align={align} style={{ whiteSpace: 'nowrap' }}>
                      {label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, index) => {
                return (
                  <TableRow key={index} hover={hover}>
                    {columns.map((col, key) => {
                      return (
                        <TableCell scope="row" key={key} align={col.align}>
                          {d[col.field]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </MuiTable>
        </>
      )}
    </>
  );
};
