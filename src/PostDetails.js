import useFetch from './useFetch';
import { useParams } from 'react';

const PostDetails = () => {
  // const params = useParams();
  // const id = params.userId;
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`http://localhost:8000/posts/${id}`);
  return (
    <div className="post-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && post.length > 0 ? (
        <article>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.author}</p>
        </article>
      ) : (
        'No post yet'
      )}
    </div>
  );
};

export default PostDetails;
