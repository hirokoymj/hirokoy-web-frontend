import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import groupBy from 'lodash/groupBy';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { TOPIC_BY_CATEGORY_ABBR } from 'queries/Topic';
import { TechCardSkeleton } from 'components/Skeleton/LoadingSkeleton';
import { TopicByIdCategoryAbbrData, Category, SubCategory } from 'pages/category/types';

interface TechCardProps {
  mappedData: {
    [key: string]: Array<{
      id: string;
      title: string;
      url: string;
      createdAt: number;
      updatedAt: number;
      category: Category;
      subCategory: SubCategory;
      order: number;
    }>;
  };
}

const TechCard: React.FC<TechCardProps> = ({ mappedData }) => {
  return (
    <div>
      {Object.entries(mappedData).map(([key, arrayValues]) => (
        <div key={key}>
          <Typography variant="h5">{key}</Typography>
          {arrayValues.map((d) => (
            <div key={d.id}>
              <Link
                href={d.url}
                target="_blank"
                rel="noreferrer"
                color="secondary"
                underline="none"
                style={{ display: 'block', padding: '15px 0' }}
              >
                {d.title}
              </Link>
              <Divider />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const TechView = () => {
  const { abbr } = useParams<{ abbr: string }>();
  const { data, loading } = useQuery<TopicByIdCategoryAbbrData>(TOPIC_BY_CATEGORY_ABBR, {
    variables: {
      abbr,
    },
  });

  const mappedData: TechCardProps | {} = !loading ? groupBy(data?.topicByCategoryAbbr, 'subCategory.name') : {};
  console.log(mappedData);

  return (
    <Grid container spacing={3} justifyContent="center" style={{ margin: '16px 0' }}>
      <Grid size={{ xs: 12, md: 8 }}>{loading ? <TechCardSkeleton /> : <TechCard mappedData={mappedData} />}</Grid>
    </Grid>
  );
};
