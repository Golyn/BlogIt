import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <h3>Page not found</h3>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default PageNotFound;
