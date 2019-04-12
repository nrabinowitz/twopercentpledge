module.exports = {
  siteMetadata: {
    title: `Two Percent Pledge`,
    description: `Static site generator for the Two Percent Pledge website`,
    author: `@nrabinowitz`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};
