import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UsersListPage';

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
      }
    ]
  }
];
