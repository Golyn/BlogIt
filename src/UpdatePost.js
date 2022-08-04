import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [description, setDescription] = useState('');
  // const [author, setAuthor] = useState('');
  const [id, setID] = useState(null);

  //   const { id } = useParams();

  const navigate = useNavigate();

  // Filling the input fields with previous data of that id stored
  //   in browsers local storage(cache) prior to updating it
  useEffect(() => {
    setTitle(localStorage.getItem('Title'));
    setID(localStorage.getItem('ID'));
    setBody(localStorage.getItem('Body'));
    // setDescription(localStorage.getItem('Description'));
    // setAuthor(localStorage.getItem('Author'));
  }, []);

  // Update post
  const updatePost = (e) => {
    e.preventDefault();
    const post = { id, title, body };
    // const post = { id, title, description, author };

    // fetch(`http://localhost:8000/posts/${id}`, {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      console.log('Post updated');
      navigate('/'); //Redirect to homepage after deletion
    });
  };

  return (
    <div className="update-post">
      <Container>
        <h1>Create post page</h1>
        <Form onSubmit={updatePost}>
          <Form.Group className="mb" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group> */}
          {/* <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group> */}
          <br />
          {/* <Form.Group className="d-grid gap-2">
            <Button variant="primary">This is a button</Button>
          </Form.Group> */}
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UpdatePost;
