/*
 * @Description: 角色列表
 * @Author: ZY
 * @Date: 2021-01-12 15:25:09
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-25 14:23:32
 */

import { asyncRoutes, constantRoutes } from './routes';

export const routes = [...constantRoutes, ...asyncRoutes];

export interface RoleBean {
  key: string;
  name: string;
  description: string;
  routes: any;
}

const roles: RoleBean[] = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes,
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page',
    routes: routes.filter((i) => i.path !== '/permission'), // Just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    description:
      'Just a visitor. Can only see the home page and the document page',
    routes: [
      {
        path: '',
        redirect: 'dashboard',
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            meta: { title: 'dashboard', icon: 'dashboard' },
          },
        ],
      },
    ],
  },
];
export default roles;
