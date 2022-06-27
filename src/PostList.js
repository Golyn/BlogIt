import { Card, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  return (
    <Container>
      <Row>
        {posts.map((post) => {
          return (
            <Col md={4} sm={6} className="my-3 py-3 post-preview" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Author: {post.author}</small>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PostList;
