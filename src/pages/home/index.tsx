import React from 'react';
import { Link } from 'react-router-dom';
import { initialRoutes } from '../../config/routes';

const HomePage = () => {
  return (
    <div>
      {initialRoutes.map((route) => (
        <Link
          key={route.path}
          style={{ padding: '0 15px' }}
          to={`${route.path}`}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
