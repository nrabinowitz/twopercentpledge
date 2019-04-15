module.exports = {
  siteMetadata: {
    title: `The Two Percent Pledge`,
    description: `The Two Percent Pledge website`,
    author: `@nrabinowitz`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138377222-1',
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
