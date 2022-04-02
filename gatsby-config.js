
module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/Images`,
      name: `Images`,
    },
  },
],
}
