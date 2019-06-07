module.exports = {
  siteMetadata: {
    title: `ရပ်ကွက်`,
    description: `Right Rule! News Media Agency in Myanmar`,
    author: `@yatkwat`,
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
        name: `သတင္းမီဒီယာေအဂ်င္စီ - ရပ္ကြက္`,
        short_name: `ရပ္ကြက္`,
        start_url: `/`,
        background_color: `#fcfdfd`,
        theme_color: `#11629c`,
        display: 'standalone',
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://title.yatkwat.com/dp-yt/`,
        apiBase: `jsonapi`, 
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
