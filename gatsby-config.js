const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Paul O'Shea Portfolio`,
    description: `Full Stack Developer.  Portfolio to display projects, bio, and contact information Paul O'Shea`,
    author: `Paul O'Shea`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, "src", "markdown-pages"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-smoothscroll",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
              maxHeight: 200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul O'Shea portfolio`,
        short_name: `PO portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/thatsme.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
