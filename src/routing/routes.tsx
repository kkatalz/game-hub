import GameDetailPage from '@/components/GameDetailPage';
import HomePage from '@/pages/HomePage';
import Layout from '@/pages/Layout';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '', Component: HomePage },
      { path: 'games/:gameId', Component: GameDetailPage },
    ],
  },
]);

export default routes;
