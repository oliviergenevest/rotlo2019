module.exports = {
  siteMetadata: {
    siteUrl:'https://rockontheloule.org',
    title: `Les Parenthèses de l'Oule`,
    description: `Festival Les Parenthèses de l'Oule - mardi 3 & mercredi 4 août 2021`,
    author: `Association Rock on the l'Oule`,
  }, 
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 1100,
          },
        },
        ],

      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-plugin-mailchimp`,
      options: {
        endpoint:'https://gmail.us20.list-manage.com/subscribe/post?u=7255d41db250cfac4673fc379&amp;id=d34dcc4d2e',
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Les parenthèses de l'Oule`,
        short_name: `Les parenthèses de l'Oule`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#f37260`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
     'gatsby-plugin-netlify',
  ],
}
