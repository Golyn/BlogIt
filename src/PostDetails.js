const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <article>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.author}</p>
      </article>
    </div>
  );
};

export default PostDetails;
