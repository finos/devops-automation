import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6f5'),
    routes: [
      {
        path: '/docs/about-finos',
        component: ComponentCreator('/docs/about-finos', '3e3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/working-groups',
        component: ComponentCreator('/docs/category/working-groups', 'e8e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/home',
        component: ComponentCreator('/docs/home', 'ed7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/working-groups/aasc',
        component: ComponentCreator('/docs/working-groups/aasc', '4d7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/working-groups/acm',
        component: ComponentCreator('/docs/working-groups/acm', '52c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/working-groups/backstage',
        component: ComponentCreator('/docs/working-groups/backstage', '21e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/working-groups/osssc',
        component: ComponentCreator('/docs/working-groups/osssc', '018'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2f2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
