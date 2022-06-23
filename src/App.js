import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Create from './Create';
import About from './About';
import Home from './Home';
import PostDetails from './PostDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/create">Post</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
