'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _defaultOptions = require('./defaultOptions');

var _ptzI18n = require('ptz-i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add custom url pathname for blog posts.
 * @param {*} args args
 * @param {*} pluginOptions plugin options from gatsby-config.js
 * @returns {void}
 */
var onCreateNode = function onCreateNode(_ref, pluginOptions) {
  var node = _ref.node,
      boundActionCreators = _ref.boundActionCreators,
      getNode = _ref.getNode;


  var options = _extends({}, _defaultOptions.defaultOptions, pluginOptions);

  var createNodeField = boundActionCreators.createNodeField;


  if (node.frontmatter && node.frontmatter.categories && node.fields && !node.fields.categorySlugs) {

    var slugAndLang = (0, _ptzI18n.getSlugAndLang)(options.langKeyForNull, node.fileAbsolutePath);

    var categorySlugs = node.frontmatter.categories.map(function (category) {
      return {
        category: category,
        link: '/' + slugAndLang.langKey + options.categoriesUrl + _lodash2.default.kebabCase(category) + '/'
      };
    });
    createNodeField({ node: node, name: 'categorySlugs', value: categorySlugs });
  }
};

exports.onCreateNode = onCreateNode;