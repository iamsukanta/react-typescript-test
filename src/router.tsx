import SidebarLayout from './layouts/SidebarLayout';

// Pages
import Dashboard from './content/dashboard/index';

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
