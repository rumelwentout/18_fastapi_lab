import React from 'react';
import { Routes, BrowserRouter } from 'react-router-dom';
import { appRoutes as routes } from './route';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return !route.children ? (
            <route.route
              key={index}
              path={route.path}
              roles={route.roles}
              exact={route.exact}
              element={route.component}
            ></route.route>
          ) : null;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
