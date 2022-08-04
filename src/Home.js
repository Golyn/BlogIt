import useFetch from './useFetch';
import PostList from './PostList';
import Pagination from './Pagination';
import { useState } from 'react';
import Footer from './Footer';

// import { Pagination } from 'react-bootstrap';
const Home = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  // Fetching all data
  const {
    data: posts,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/posts'); //http://localhost:8000/posts
  console.log(posts);
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <img
        src="https://picsum.photos/1600/550"
        className="img-fluid shadow-4"
        alt="..."
      />
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {/*  if the data is retrieved and the state is not null or empty render the element */}
      {/* {posts && posts.length > 0 && (
        <PostList posts={posts} title="All Posts" />
      )} */}
      {currentPosts && currentPosts.length > 0 && (
        <PostList posts={currentPosts} title="All Posts" />
      )}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default Home;
