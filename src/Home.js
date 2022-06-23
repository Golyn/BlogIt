import useFetch from './useFetch';
import PostList from './PostList';

const Home = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch('http://localhost:8000/posts');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {/*  if the data is retrieved and the state is not null or empty render the element */}
      {posts && posts.length > 0 && (
        <PostList posts={posts} title="All Posts" />
      )}
    </div>
  );
};

export default Home;
