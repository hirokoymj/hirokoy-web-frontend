import React from 'react';
import { useParams } from 'react-router-dom';

export const TestDetailView = () => {
  const id = useParams();
  return <div>TestDetailView: {id}</div>;
};
