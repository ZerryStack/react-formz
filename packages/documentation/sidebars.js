/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    'intro',
    'performance',
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/basic-usage', 'guides/form-validations', 'guides/field-validation', 'guides/form-persistance'],
    },
    {
      type: 'category',
      label: 'Components',
      items: ['components/form', 'components/field', 'components/array-field'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/form', 'api/field'],
    },
  ],
};

module.exports = sidebars;
