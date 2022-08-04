import useFetch from './useFetch';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // } = useFetch(`http://localhost:8000/posts/${id}`);

  const navigate = useNavigate();

  // Deleting a post
  const deletePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Post deleted');
      navigate('/'); //Redirect to homepage after deletion
    });
  };

  // Retrieving data and storing it in browers local storage(cache)
  const setData = () => {
    // let { id, title, description, author } = post;
    let { id, title, body } = post;
    localStorage.setItem('ID', id);
    localStorage.setItem('Title', title);
    // localStorage.setItem('Description', description);
    localStorage.setItem('Body', body);
    // localStorage.setItem('Author', author);
    console.log(post);
    console.log('post updated');
  };

  return (
    <Container>
      <div className="post-details mt-4">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {post && (
          <>
            <Row>
              <Col className="my-3 py-3 post-preview">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold d-flex justify-content-center mb-4">
                      {post.title}
                    </Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    {/* <Card.Text>{post.description}</Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    {/* <small className="text-muted">Author: {post.author}</small> */}
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
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
          </>
        )}
      </div>
    </Container>
  );
};

export default PostDetails;
