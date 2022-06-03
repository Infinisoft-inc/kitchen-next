// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KitchenSink',
  tagline: 'Cooking the future, one micro at a time! 🚀',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/infinisoftticon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Infinisoft Inc.', // Usually your GitHub org/user name.
  projectName: 'KitchenSink', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['../packages/libraries/@infini-soft/promises'],
        entryPointStrategy: 'packages',
        sidebar: {
          fullNames: true,
        },
      },
    ],
  ],
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Infinisoft',
        logo: {
          alt: 'My Site Logo',
          src: 'img/infinisoftticon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Cli',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Libraries',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Schemas',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Templates',
          },          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Components',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Infinisoft-inc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Cli docs',
                to: '/docs/intro',
              },
              {
                label: 'Libraries docs',
                to: '/docs/intro',
              },
              {
                label: 'Schemas docs',
                to: '/docs/intro',
              },
              {
                label: 'Templates docs',
                to: '/docs/intro',
              },
              {
                label: 'Components docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Npm',
                href: 'https://www.npmjs.com/search?q=infini-soft%2F',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/infinisoft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Infinisoft-inc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KitchenSink, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
