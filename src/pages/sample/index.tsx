import React from 'react';
import { Route, Link } from 'react-router-dom';

const SamplePage = ({ routes, match }: any) => {
  return (
    <div>
      <div>
        {routes.map((route: any) => (
          <Link
            key={`${match.url}${route.path}`}
            to={`${match.url}${route.path}`}
          >
            {route.title}
          </Link>
        ))}
      </div>
      {routes.map((route: any) => (
        <Route
          key={`${match.path}${route.path}`}
          path={`${match.path}${route.path}`}
          exact={route.exact}
          render={(props) => (
            <route.component routes={route.routes} {...props} />
          )}
        />
      ))}
    </div>
  );
};

export default SamplePage;
