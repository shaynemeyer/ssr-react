import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UserListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
