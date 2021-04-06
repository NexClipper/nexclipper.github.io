module.exports = {
  title: 'NexClipper',
  tagline: 'Fully Managed Observability Service',
  customFields: {
    tagdescription: 'Easy of use and fast management for Prometheus cluster at any cloud, at scale',
  },
  url: 'https://nexclipper.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nexclipper', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    algolia: {
      apiKey: 'dc6d5a8551a50e2c81b733ec0ee1305f',
      indexName: 'nexclipper',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
    navbar: {
      title: 'NexClipper',
      logo: {
        alt: 'NexClipper Logo',
        src: 'img/NexClipper_200.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://console.nexclipper.io/login',
          label: 'Get Started',
          position: 'right',
        },
        {
          href: 'https://github.com/NexClipper/NexClipper',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://NexClipper.io',
          label: 'Support',
          position: 'left',
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
              label: 'Getting Started',
              to: 'docs/start',
            },
            {
              label: 'What is NexClipper?',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'http://nexclipper.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nexclipper',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/NexClipper/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NexClipper/NexClipper',
            },
            {
              label: 'License Compliance',
              to: 'license',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NexCloud, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-122075277-7',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/NexClipper/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NexClipper/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};