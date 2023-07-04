import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '160'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f24'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '855'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'd29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '75c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '0d2'),
    exact: true
  },
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
