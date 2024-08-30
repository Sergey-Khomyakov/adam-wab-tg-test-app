import type { ComponentType, JSX } from 'react';

interface Route {
  path: string;
  getComponent: () => Promise<ComponentType>;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  {
    path: '/',
    getComponent: () => import('@/pages/IndexPage/IndexPage').then(m => m.IndexPage),
  },
  {
    path: '/main',
    getComponent: () => import('@/pages/mainPage/mainPage').then(m => m.mainPage),
  },
  {
    path: '/error',
    getComponent: () => import('@/pages/errorPage/errorPage').then(m => m.errorPage),
  },
];