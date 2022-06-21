import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div className="post">
      <Container>
        <h1>Create post page</h1>
        <Form>
          <Form.Group className="mb" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value="hh" />
          </Form.Group>
          <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value="hh" />
          </Form.Group>
          <Form.Group className="mb" controlId="formDescription">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value="hh" />
          </Form.Group>
          <br />
          <Form.Group className="d-grid gap-2">
            <Button variant="primary">This is a button</Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Post;
