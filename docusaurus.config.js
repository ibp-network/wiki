// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IBP Wiki',
  tagline: 'Body of Knowledge for the Infrastructure Builders\' Program',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.ibp.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unused', // Usually your GitHub org/user name.
  projectName: 'unused', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ibp-network/wiki/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ibp-network/wiki/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ibp-social-card.jpg',
      navbar: {
        title: 'IBP Wiki',
        logo: {
          alt: 'IBP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome/welcome',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ibp-network',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Documentation',
                to: '/docs/welcome',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Element / Matrix / Riot',
                href: 'https://matrix.to/#/!tNVRcjndUHhSDzCKFF:matrix.org?via=parity.io&via=matrix.org&via=matrix.parity.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@ibp.network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ibp-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infrastructure Builders\' Program.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
