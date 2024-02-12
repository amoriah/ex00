import { RouteObject } from 'react-router-dom';
import { App } from '../App';
import Pages from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'button', element: <Pages.ButtonPage /> },
      { path: 'date', element: <Pages.DatePage /> },
      { path: 'form', element: <Pages.FormPage /> },
    ],
  },
];

export default routes;
