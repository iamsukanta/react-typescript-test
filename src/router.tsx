import { lazy } from 'react';
const SidebarLayout = lazy(() => import('./layouts/SidebarLayout'));
// Pages
const Dashboard = lazy(() => import('./content/dashboard'));

const routes = [
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
];

export default routes;
