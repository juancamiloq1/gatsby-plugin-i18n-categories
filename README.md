# gatsby-plugin-i18n-categories

## Based on gatsby-plugin-i18n-tags


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0b3a917c0cb9433cb12eec33b989c723)](https://www.codacy.com/app/angeloocana/gatsby-plugin-i18n-categories?utm_source=github.com&utm_medium=referral&utm_content=juancamiloqhz/gatsby-plugin-i18n-tags&utm_campaign=badger)
[![Build Status](https://travis-ci.org/juancamiloqhz/gatsby-plugin-i18n-categories.svg)](https://travis-ci.org/juancamiloqhz/gatsby-plugin-i18n-categories)
[![NPM](https://img.shields.io/npm/v/gatsby-plugin-i18n-categories.svg)](https://www.npmjs.com/package/gatsby-plugin-i18n-categories)
[![codecov.io](http://codecov.io/github/juancamiloqhz/gatsby-plugin-i18n-categories/coverage.svg)](http://codecov.io/github/angeloocana/gatsby-plugin-i18n-categories)
[![Dependency Status](https://gemnasium.com/juancamiloqhz/gatsby-plugin-i18n-categories.svg)](https://gemnasium.com/juancamiloqhz/gatsby-plugin-i18n-categories)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/juancamiloqhz/gatsby-plugin-i18n-categories)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Add categories for different languages (i18n) for Gatsby.


## Examples


## Install
```bash
    npm install gatsby-plugin-i18n-categories --save
```


## How to use
1. Include the plugin in your `gatsby-config.js` file after **gatsby-plugin-i18n**.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-i18n-categories',
    options: { // Default options
      categoryPage: 'src/templates/category-page.js',
      categoriesUrl: '/category/',
      langKeyForNull: 'any'
    }
  }
]
```


2. Add **categories** prop to your .md files
```markdown
    ---
    title: Your awesome title
    categories:
      - Linux
      - Arch
    ---
```


3. Query!

```graphql
  {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
          }
          fields{
            categorySlugs {
              category
              link
            }
          }
        }
      }
    }
  }
```
