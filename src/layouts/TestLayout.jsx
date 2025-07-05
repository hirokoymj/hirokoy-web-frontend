import React from 'react';
import { useQuery } from '@apollo/client';
import { CATEGORY_ALL } from 'queries/Category';
import get from 'lodash/get';
import map from 'lodash/map';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export const TestLayout = () => {
  const { data, loading, error } = useQuery(CATEGORY_ALL);
  console.log(data);

  if (error) return <p>Error : {error.message}</p>;
  const category_data = !loading && get(data, 'categoryAll', []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <h1>Test View</h1>
          {loading ? <p>loading</p> : <p>{JSON.stringify(category_data)}</p>}
        </Grid>
      </Grid>
    </Container>
  );
};
