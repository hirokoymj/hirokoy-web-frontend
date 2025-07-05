import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { useQuery } from '@apollo/client';
import { CATEGORY_ALL } from 'queries/Category';
import get from 'lodash/get';
import { Link } from 'react-router-dom';

export const TestView = () => {
  const { data, loading, error } = useQuery(CATEGORY_ALL);
  const category_data = !loading && get(data, 'categoryAll', []);

  return (
    <div style={{ width: '100%' }}>
      {loading ? (
        <p>loading</p>
      ) : (
        <div>
          {category_data.map((category) => (
            <p key={category.id}>
              <Link to={`/test/${category.id}`}>{category.name}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
