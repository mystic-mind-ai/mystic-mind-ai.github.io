/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mystic Mind`,
    description: `Mystic Mind is the premier AI solution for original RPG content.`,
    siteUrl: `https://www.mysticmind.io`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png",
      "theme_color": `#335396`
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