const defaultOptions = {
  categoryPage: 'src/templates/category-page.js',
  categoriesUrl: '/category/',
  langKeyForNull: 'any',
  query: `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                langKey
              }
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `
};

export {
  defaultOptions
};
