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
    component: ComponentCreator('/docs', 'de1'),
    routes: [
      {
        path: '/docs/about-finos',
        component: ComponentCreator('/docs/about-finos', '370'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/home',
        component: ComponentCreator('/docs/home', '0dd'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap', 'b44'),
        exact: true,
        sidebar: "mainSidebar"
      },
      {
        path: '/docs/team',
        component: ComponentCreator('/docs/team', '335'),
        exact: true,
        sidebar: "mainSidebar"
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
