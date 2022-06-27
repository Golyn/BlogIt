import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Create from './Create';
import About from './About';
import Home from './Home';
import PostDetails from './PostDetails';
import UpdatePost from './UpdatePost';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/update" element={<UpdatePost />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </Container>
      </div>
    </Router>
  );
}

export default App;
