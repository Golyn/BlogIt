import useFetch from './useFetch';
import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'bootstrap';

const PostDetails = () => {
  // const params = useParams();
  // const id = params.userId;
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`http://localhost:8000/posts/${id}`);
  console.log(id);

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
          {/* <Button>Delete</Button> */}
          <button onClick={deletePost}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
