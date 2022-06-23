import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  return (
    <div className="post-list">
      <Container>
        <h1>{title}</h1>
        {posts.map((post) => (
          <div className="post-preview" key={post.id}>
            {/* When post is clicked on view post in the PostDetails page */}
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.author}</p>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PostList;
