module.exports = {
  siteMetadata: {
    title: 'Anchen Huang',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        shortName: 'starter',
        startUrl: '/',
        backgroundColor: '#663399',
        themeColor: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/page_logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
