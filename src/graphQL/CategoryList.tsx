import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client';
import { Logo } from '../components/Logo/Logo';

export const CATEGORY_BY_ID = gql`
  query Category_By_Id($id: ID!) {
    categoryById(id: $id) {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  }
`;

export const CATEGORY_ALL = gql`
  query CategoryAll {
    categoryAll {
      id
      name
      abbr
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: createCategoryInput!) {
    createCategory(input: $input) {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  }
`;

interface Category {
  id: string;
  name: string;
  abbr: string;
  createdAt: number;
  updatedAt: number;
}

type CategoryAllData = {
  categoryAll: Category[];
};
type CategoryByIdData = {
  categoryById: Category;
};
type CreateCategoryData = {
  createCategory: Category;
};

//type CategoryData = CategoryAllData | CategoryByIdData | CreateCategoryData;

export const CategoryList = () => {
  const { data, loading, error } = useQuery<CategoryAllData>(CATEGORY_ALL);
  console.log(data);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ background: 'lime' }}>
      <h1>Category List</h1>
      <Logo />
      {loading ? <p>Loading...</p> : <div>{data?.categoryAll.map((d) => <p key={d.id}>{d.id}</p>)}</div>}
    </div>
  );
};

export const OneCategory = () => {
  const { data, loading, error } = useQuery<CategoryByIdData>(CATEGORY_BY_ID, {
    variables: { id: '5fec597e5e17e200170e0ffe' },
  });
  console.log(data);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Category One</h1>
      {loading ? <p>Loading...</p> : <div>{data && data?.categoryById?.name}</div>}
    </div>
  );
};
//https://www.apollographql.com/docs/react/data/mutations
export const CreateCategory = () => {
  const { data: c_data, loading: c_loading, error: c_error } = useQuery<CategoryAllData>(CATEGORY_ALL);
  const [createCategory, { data, loading, error }] = useMutation<CreateCategoryData>(CREATE_CATEGORY, {
    refetchQueries: [CATEGORY_ALL],
  });

  const handleClick = async () => {
    try {
      await createCategory({
        variables: {
          input: {
            name: 'TEST-777',
            abbr: 'test-777',
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data);

  return (
    <>
      <h1>Mutation TEST</h1>
      <button onClick={handleClick}>Add category</button>
      <hr />
      <div>
        <h1>NEW Category</h1>
        {data && (
          <div>
            <h1>New Category has been created.</h1>
            <p>{data?.createCategory.id}</p>
            <p>{data?.createCategory.name}</p>
            <p>{data?.createCategory.abbr}</p>
          </div>
        )}
      </div>
      <div>
        <h1>Category List</h1>
        {c_loading || c_error ? (
          <p>Loading...</p>
        ) : (
          <div>
            {c_data?.categoryAll.map((d: Category) => (
              <p key={d.id}>
                {d.id}, {d.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
