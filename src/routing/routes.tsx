import GameDetailPage from '@/components/GameDetailPage';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import Layout from '@/pages/Layout';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { path: '', Component: HomePage },
      { path: 'games/:gameId', Component: GameDetailPage },
    ],
  },
]);

export default routes;
