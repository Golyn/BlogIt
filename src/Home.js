import { useState } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      title: 'Python',
      description: 'Lorem ipsum dolor sit amet.',
      author: 'Seth',
    },
    {
      title: 'Go Lang',
      description: 'ipsum lorem dolor sit am.',
      author: 'Fiifi',
    },
    {
      title: 'PHP',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, porro.',
      author: 'Fiifi',
    },
  ]);
  return (
    <div className="home">
      <PostList posts={posts} title="All Posts" />
    </div>
  );
};

export default Home;
