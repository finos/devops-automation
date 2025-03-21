// Docs at https://docusaurus.io/docs/configuration

// Replace 'project-blueprint' with {project name}
const projectName = 'DevOps Automation'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'devops-automation'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `FINOS ${projectName}`,
  tagline: `Special Interest Group`,
  url: 'https://devops.finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    navbar: {
      logo: {
        alt: 'FINOS DevOps Automation Logo',
        src: 'img/devops-automation/logo-wht.svg',
      },
      items: [
        {to: 'docs/home', label: 'Docs', position: 'right'},
        {to: 'https://github.com/orgs/finos/teams/devops-automation-maintainers', label: 'Team', position: 'right'},
        {
          href: 'https://github.com/finos/devops-automation',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/home',
            },
            {
              label: 'Team',
              to: 'https://github.com/orgs/finos/teams/devops-automation-maintainers',
            },
            {
              label: 'About FINOS',
              to: 'docs/about-finos',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              to: 'https://community.finos.org/',
            },
            {
              label: 'Community Governance',
              to: 'https://community.finos.org/docs/governance/#community-governance',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/devops-automation/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};

module.exports = config;
