import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import RootRoutes from 'components/routes/root';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={RootRoutes} />
  </React.StrictMode>
);