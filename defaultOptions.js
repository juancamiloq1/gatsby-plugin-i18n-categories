'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  categoryPage: 'src/templates/category-page.js',
  categoriesUrl: '/category/',
  langKeyForNull: 'any',
  query: '\n      {\n        allMarkdownRemark {\n          edges {\n            node {\n              fields {\n                slug,\n                langKey\n              }\n              frontmatter {\n                categories\n              }\n            }\n          }\n        }\n      }\n    '
};

exports.defaultOptions = defaultOptions;