import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Confirm from '@/pages/Confirm';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: 'confirm',
    element: <Confirm />,
  },
];

export default function Router() {
  return createBrowserRouter(routes);
}
