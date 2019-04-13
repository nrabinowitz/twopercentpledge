/* eslint-disable no-process-env, no-console */
const GoogleSpreadsheet = require('google-spreadsheet');

const spreadsheetCredentialsPath = process.env.CREDENTIALS;
if (!spreadsheetCredentialsPath) {
  throw new Error(
    'You must supply the path to the Google Spreadsheet ' +
      'credentials file in the CREDENTIALS env variable'
  );
}
const creds = require(spreadsheetCredentialsPath);

// Create a document object using the ID of the spreadsheet
const doc = new GoogleSpreadsheet(
  '14dL-8nYBdlS0Ip055-HgPj81IvVLEGvzNZQwPpMZXVU'
);

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, authErr => {
  if (authErr) {
    throw authErr;
  }
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, (readErr, rows) => {
    if (readErr) {
      throw readErr;
    }
    console.log(
      JSON.stringify(
        rows.map(({name, jobtitle}) => ({name, jobtitle})),
        null,
        '  '
      )
    );
  });
});
