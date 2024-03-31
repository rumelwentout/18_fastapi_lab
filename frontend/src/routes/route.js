import React from 'react';
import { Route } from 'react-router-dom';

const Register = React.lazy(() => import('../modules/pages/auth/register'));

const register = {
  path: '/auth/register',
  exact: true,
  name: 'Registration Page component',
  component: <Register />,
  roles: ['User'],
  route: Route
};

const registerHome = {
  path: '/',
  exact: true,
  name: 'Registration Page component',
  component: <Register />,
  roles: ['User'],
  route: Route
};

export const appRoutes = [register,registerHome];
