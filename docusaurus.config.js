// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platform-based Programming',
  tagline: 'Odd Semester 2022/2023',
  url: 'https://pbp-fasilkom-ui.github.io',
  baseUrl: process.env.NODE_ENV?.toLowerCase() == "production" ? '/ganjil-2023/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'assignments',
        path: 'assignments',
        routeBasePath: 'assignments',
        sidebarPath: require.resolve('./sidebars.js')
      }
    ]
  ],


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pbp-fasilkom-ui', // Usually your GitHub org/user name.
  projectName: 'ganjil-2023', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-AU',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "dark",
      },
      metadata: [
        {
          name: 'google-site-verification',
          content: 'e3cclHs9HjQhuLJQyjFVf3ymBwfxaxzC-k9_UGZEuI0'
        }
      ],
      navbar: {
        title: 'PBP Ganjil 22/23',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: "/assignments/",
            position: 'left',
            label: 'Assignments'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            to: 'playground',
            label: 'Playground',
            position: 'right',
          },
          {
            type: "localeDropdown",
            position: 'right'
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Playground',
                to: '/playground',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub - Contribute Here',
                href: 'https://github.com/pbp-fasilkom-ui/ganjil-2023',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
