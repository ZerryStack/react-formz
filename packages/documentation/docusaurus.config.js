// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Formz",
  tagline:
    "Next generation form builder for react, built with speed and accessibility.",
  url: "https://react-formz.zerry.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zerry.dev", // Usually your GitHub org/user name.
  projectName: "react-formz", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: [
          "../react-formz/src/components",
          "../react-formz/src/hooks",
          "../react-formz/src/providers",
          "../react-formz/src/types",
        ],
        tsconfig: "../react-formz/tsconfig.json",
        entryPointStrategy: "expand",
        "out": "./api/generated",
        "exclude": ["**/*+(test|.spec|.e2e).ts"],
        "externalPattern": ["**/node_modules/**"],
        "excludeExternals": true,
        "plugin": ["typedoc-plugin-rename-defaults"],
        "gitRevision": "main"
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ZerryStack/react-formz/tree/main/packages/documentation/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ZerryStack/react-formz/tree/main/packages/documentation/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
      },
      navbar: {
        title: "React Formz (beta)",
        logo: {
          alt: "React Formz",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/ZerryStack/react-formz",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/react-formz",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/react-formz",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/react-formz",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ZerryStack/react-formz",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Formz Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
