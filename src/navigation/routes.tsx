import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { mainPage } from '@/pages/mainPage/mainPage';
import { errorPage } from '@/pages/errorPage/errorPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/main', Component: mainPage },
  { path: '/error', Component: errorPage }
];
