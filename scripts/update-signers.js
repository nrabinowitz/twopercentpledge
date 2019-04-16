/* eslint-disable no-process-env, no-console */
const GoogleSpreadsheet = require('google-spreadsheet');

const SPREADSHEET_ID = '14dL-8nYBdlS0Ip055-HgPj81IvVLEGvzNZQwPpMZXVU';
// We appear to be stuck with these column headers - they're set by the form.
const NAME_COL =
  'itheundersignedcurrentorformeruberemployeepledgetodonateatleast2ofthevalueofmyuberequitytocharity.';
const JOB_COL = 'jobtitleoptional';
const EMAIL_COL = 'emailaddress_2';

const spreadsheetCredentialsPath = process.env.CREDENTIALS;
if (!spreadsheetCredentialsPath) {
  throw new Error(
    'You must supply the path to the Google Spreadsheet ' +
      'credentials file in the CREDENTIALS env variable'
  );
}
const creds = require(spreadsheetCredentialsPath);

// Create a document object using the ID of the spreadsheet
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, authErr => {
  if (authErr) {
    throw authErr;
  }
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, {orderby: 'timestamp', reverse: true}, (readErr, rows) => {
    if (readErr) {
      throw readErr;
    }
    console.log(JSON.stringify(processRows(rows), null, '  '));
  });
});

function processRows(rows) {
  // check for dupe emails and names
  const exists = {};
  rows.forEach(({[NAME_COL]: name, [EMAIL_COL]: email}) => {
    if (exists[email]) {
      throw new Error(`Dupe email: ${email}`);
    }
    if (exists[name] && !name.match(/anonymous/i)) {
      throw new Error(`Dupe name: ${name}`);
    }
    exists[email] = exists[name] = true;
  });

  return rows
    .filter(row => Boolean(row.ok))
    .map(row => ({name: row[NAME_COL], jobtitle: row[JOB_COL]}));
}
