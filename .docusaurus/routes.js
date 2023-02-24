import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ba5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '04b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '200'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '617'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '493'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1cc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a0c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '08d'),
    exact: true
  },
  {
    path: '/blog/admin-meeting-20230125',
    component: ComponentCreator('/blog/admin-meeting-20230125', '227'),
    exact: true
  },
  {
    path: '/blog/admin-meeting-20230220',
    component: ComponentCreator('/blog/admin-meeting-20230220', 'f8b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '925'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '43a'),
    exact: true
  },
  {
    path: '/blog/tags/admin',
    component: ComponentCreator('/blog/tags/admin', '69b'),
    exact: true
  },
  {
    path: '/blog/tags/news',
    component: ComponentCreator('/blog/tags/news', '475'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', '15c'),
    exact: true
  },
  {
    path: '/blog/tags/youtube',
    component: ComponentCreator('/blog/tags/youtube', 'f36'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd8e'),
    exact: true
  },
  {
    path: '/blog/youtube',
    component: ComponentCreator('/blog/youtube', '288'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f71'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '611'),
    routes: [
      {
        path: '/docs/category/original-wiki-content',
        component: ComponentCreator('/docs/category/original-wiki-content', '6d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basic-server',
        component: ComponentCreator('/docs/category/tutorial---basic-server', '52f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Bounty-Managment',
        component: ComponentCreator('/docs/original/Bounty-Managment', 'bc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Curators-&-Advisors',
        component: ComponentCreator('/docs/original/Curators-&-Advisors', '9a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Development-Requirements',
        component: ComponentCreator('/docs/original/Development-Requirements', 'bc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/External-links',
        component: ComponentCreator('/docs/original/External-links', '5fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Home',
        component: ComponentCreator('/docs/original/Home', '1d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Meetings-&-Announcements',
        component: ComponentCreator('/docs/original/Meetings-&-Announcements', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Membership',
        component: ComponentCreator('/docs/original/Membership', '51a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/SLA-Checks',
        component: ComponentCreator('/docs/original/SLA-Checks', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/original/Support',
        component: ComponentCreator('/docs/original/Support', '044'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/server/first-access',
        component: ComponentCreator('/docs/server/first-access', '9c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '892'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
