import HomePage from '../../pages/home';
import { sampleRoutes } from './sample';
import { RouteProps } from 'react-router';

interface RoutesType extends RouteProps {
  path: string | (string & string[]);
  title?: string;
  auth?: boolean;
  routes?: Array<RoutesType>;
  component: any; // TODO: fix
}
export const initialRoutes: Array<RoutesType> = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: HomePage,
    auth: true,
  },
  sampleRoutes,
];
