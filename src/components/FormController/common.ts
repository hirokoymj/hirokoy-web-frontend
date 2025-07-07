import get from 'lodash/get';
import map from 'lodash/map';
import { DropdownOption } from 'pages/type/types';

interface DataItem {
  id: string;
  name: string;
  // [key: string]: any; // Allow for other properties not relevant to dropdown
}

export const makeDropdownOptions = <T>(data: T, path: string, loading: boolean): DropdownOption[] => {
  const dataArray: DataItem[] = !loading ? (get(data, path, []) as DataItem[]) : [];

  const dropdown_options: DropdownOption[] = map(dataArray, ({ id, name }: DataItem) => {
    return {
      value: id,
      label: name,
    };
  });

  return dropdown_options;
};
