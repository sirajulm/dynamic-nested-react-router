import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { initialRoutes } from '../../config/routes';

const Routes = () => {
  const [routes, setRoutes] = useState(initialRoutes);
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.component routes={route.routes} {...props} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
