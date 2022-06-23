import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const blog = { title, description, author };
  // Adding new post
  const addPost = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/posts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => console.log('New post added'));
  };
  return (
    <div className="post">
      <Container>
        <h1>Create post page</h1>
        <Form onSubmit={addPost}>
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
              type="text"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <br />
          {/* <Form.Group className="d-grid gap-2">
            <Button variant="primary">This is a button</Button>
          </Form.Group> */}
          <Button type="submit" variant="primary">
            This is a button
          </Button>

          {/* <Button
            className="btn btn-primary btn-large centerButton"
            type="submit"
          >
            Send
          </Button> */}
        </Form>
      </Container>
    </div>
  );
};

export default Post;
