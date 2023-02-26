/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = { 
  siteMetadata: {
    siteUrl: `https://www.mysticmind.io`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png",
      "theme_color": `#6838b5`
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};