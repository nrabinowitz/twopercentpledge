/* eslint-disable no-process-env */

const spreadsheetCredentialsPath = process.env.CREDENTIALS;

if (!spreadsheetCredentialsPath) {
  throw new Error(
    'You must supply the path to the Google Spreadsheet ' +
      'credentials file in the CREDENTIALS env variable'
  );
}

module.exports = {
  siteMetadata: {
    title: `The Two Percent Pledge`,
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
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '14dL-8nYBdlS0Ip055-HgPj81IvVLEGvzNZQwPpMZXVU',
        worksheetTitle: 'pledge-signers',
        credentials: require(spreadsheetCredentialsPath)
      }
    }
  ]
};
