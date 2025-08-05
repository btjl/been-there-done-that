import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import "dotenv/config";
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Been There Done That',
  favicon: 'img/favicon.ico',

  customFields: {
    gMapsEmbedApiKey: process.env.GOOGLE_MAPS_EMBED_API_KEY
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://been-there-done-that.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'btjl', // Usually your GitHub org/user name.
  projectName: 'been-there-done-that', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        theme: {
          customCss: './src/global.css',
        },

      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/traveldex-card.jpg',
    navbar: {
      title: 'Been There Done That',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: "/vlogs",
          label: "Vlogs",
        },
        {
          href: "/community",
          label: "Community",
        },

        {
          href: "/apps",
          label: "Travel Apps",
          position: "right",
        },

        {
          href: 'https://www.youtube.com/@Brennan_Tan',
          label: 'YouTube',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@Brennan_Tan"
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Been There Done That, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'community',
        path: './community',
        routeBasePath: 'community',
        blogSidebarTitle: 'Community',
        blogDescription: 'Community interactions',
        showReadingTime: true,
        postsPerPage: 1,
        blogSidebarCount: "ALL",
        blogTitle: "Community",
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/btjl/been-there-done-that/tree/main/community/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        authorsMapPath: '../meta/authors.yml',
        tags: '../meta/tags.yml',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'vlogs',
        path: './vlogs',
        routeBasePath: 'vlogs',
        blogSidebarTitle: 'Vlogs',
        blogDescription: 'Vlogs from my travels',
        showReadingTime: true,
        postsPerPage: 1,
        blogSidebarCount: "ALL",
        blogTitle: "Vlogs",
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/btjl/been-there-done-that/tree/main/vlogs/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        authorsMapPath: '../meta/authors.yml',
        tags: '../meta/tags.yml',
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EKH2D0SS31',
        anonymizeIP: true,
      },
    ],
  ]
};

export default config;
