import { Container } from 'react-bootstrap';

const PostList = ({ posts, title }) => {
  return (
    <div className="post-list">
      <Container>
        <h1>{title}</h1>
        {posts.map((post, i) => (
          <div className="post-preview" key={i}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.author}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PostList;
