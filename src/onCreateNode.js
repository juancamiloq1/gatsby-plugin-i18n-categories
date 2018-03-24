import _ from 'lodash';
import {defaultOptions} from './defaultOptions';
import { getSlugAndLang } from 'ptz-i18n';

/**
 * Add custom url pathname for blog posts.
 * @param {*} args args
 * @param {*} pluginOptions plugin options from gatsby-config.js
 * @returns {void}
 */
const onCreateNode = ({ node, boundActionCreators, getNode }, pluginOptions) => {

  const options = {
    ...defaultOptions,
    ...pluginOptions
  };

  const { createNodeField } = boundActionCreators;

  if (node.frontmatter && node.frontmatter.categories &&
        node.fields && !node.fields.categorySlugs) {

    const slugAndLang = getSlugAndLang(options.langKeyForNull, node.fileAbsolutePath);

    const categorySlugs = node.frontmatter.categories.map(
      category => {
        return {
          category,
          link: `/${slugAndLang.langKey}${options.categoriesUrl}${_.kebabCase(category)}/`
        };
      }
    );
    createNodeField({ node, name: 'categorySlugs', value: categorySlugs });
  }
};

export {
  onCreateNode
};
