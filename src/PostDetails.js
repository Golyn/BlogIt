import useFetch from './useFetch';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`http://localhost:8000/posts/${id}`);
  // console.log(id);

  const navigate = useNavigate();

  // Deleting a post
  const deletePost = () => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Post deleted');
      navigate('/'); //Redirect to homepage after deletion
    });
  };

  // Retrieving data and storing it in browers local storage(cache)
  const setData = () => {
    let { id, title, description, author } = post;
    localStorage.setItem('ID', id);
    localStorage.setItem('Title', title);
    localStorage.setItem('Description', description);
    localStorage.setItem('Author', author);
    console.log(post);
    console.log('post updated');
  };

  // // Update redirect
  // const updateRedirect = () => {
  //   navigate('/update');
  // };
  return (
    <div className="post-details">
      <h2>This is the Post Details Page</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.author}</p>
          <Button
            onClick={deletePost}
            variant="outline-danger"
            className="me-3 "
          >
            Delete
          </Button>
          <Link to={'/update'}>
            <Button onClick={setData} variant="outline-primary">
              Update
            </Button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
