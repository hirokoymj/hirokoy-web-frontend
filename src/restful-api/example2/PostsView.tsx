import { useFetch } from './useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostsView() {
  const { data: posts, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.id} ({post.title})
            </li>
          ))}
        </ul>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
}
export default PostsView;
