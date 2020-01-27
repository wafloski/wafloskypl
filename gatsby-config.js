module.exports = {
  siteMetadata: {
    title: `Waflosky Drone Photography`,
    description: `Fotografie z drona najwyższych lotów. Zdjęcia z Polski i z całego świata. Piękne fotografie krajobrazów, a także inne spojrzenie na otaczający nas świat.`,
    author: `Mateusz Konopka Waflosky`,
    siteUrl: `http://waflosky.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_fav.png`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.wafloski.nazwa.pl/waflosky-pl/',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://www.wafloski.nazwa.pl/waflosky-pl/',
          replacementUrl: 'https://localhost:8000',
        },
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
          "**/*/*/menus",
          "**/*/*/menu-locations",
        ],
        excludedRoutes: [],
        normalizer({ entities }) {
          return entities;
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
