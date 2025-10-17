import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () =>
      import('./modules/home/home.view').then((module) => ({ Component: module.default })),
  },
  {
    path: '/about',
    lazy: () =>
      import('./modules/about/about.view').then((module) => ({ Component: module.default })),
  },
]);
