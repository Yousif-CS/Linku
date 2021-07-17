import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Project from './pages/Project';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import AccessDenied from './pages/AccessDenied';
import Profile from './pages/Profile';
import { AppContext } from './utils/Store'

// ----------------------------------------------------------------------

export default function Router() {
  const user = React.useContext(AppContext).user;
  
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'project', element: <Project /> },
        { path: 'blog', element: <Blog /> },
        { path: 'profile', element: <Profile />},
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'accessDenied', element: <AccessDenied /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Home /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
