import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from '/.page/AdminsListPage'
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
        ...AdminListPage,
        path: /'admins'
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
