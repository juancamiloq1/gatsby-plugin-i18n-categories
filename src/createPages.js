import _ from 'lodash';
import {defaultOptions} from './defaultOptions';
import path from 'path';
import {logError} from './logError';
import R from 'ramda';

const createPages = ({ graphql, boundActionCreators }, pluginOptions) => {
  const { createPage } = boundActionCreators;
  const options = {
    ...defaultOptions,
    ...pluginOptions
  };
  
  return new Promise((resolve, reject) => {
    const categoryPage = path.resolve(options.categoryPage);
    graphql(options.query).then(result => {
      try {
  
        if (result.errors) {
          throw result.errors;
        }
  
        const langCategories = result.data.allMarkdownRemark.edges
          .filter(R.path(['node', 'fields', 'langKey']))
          .reduce((categories, edge) => {
            const langKey = edge.node.fields.langKey;
            categories[langKey] = (categories[langKey] || []).concat(edge.node.frontmatter.categories);
            return categories;
          }, {});
  
        Object.keys(langCategories).forEach(langKey => {
          const categories = _.uniq(langCategories[langKey])
            .filter(category => category && category !== '');
  
          categories.forEach(category => {
            const categoryPath = `/${langKey}${options.categoriesUrl}${_.kebabCase(category)}/`;
            createPage({
              path: categoryPath,
              component: categoryPage,
              context: {
                category,
                langKey
              },
            });
          });
        });
  
        resolve();
  
      } catch (e) {
        logError(e);
        reject(e);
      }
    });
  });
};

export {
  createPages
};
