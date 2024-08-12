import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Confirm from '@/pages/Confirm';

const base = '/Easy-Web';
const routes = [
  {
    path: base,
    element: <Home />,
  },
  {
    path: base + '/login',
    element: <Login />,
  },
  {
    path: base + '/signup',
    element: <Signup />,
  },
  {
    path: base + '/confirm',
    element: <Confirm />,
  },
];

export default function Router() {
  return createBrowserRouter(routes);
}
