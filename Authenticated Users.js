// Get Authenticated Users Data with their UserNames
const accessToken = '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';

fetch('https://api.github.com/users/Wahaj-Ansarie', {
  headers: {
    // My Personal Access Token
    'Authorization' : `token ${accessToken}`,
    // Telling the Server to Return the Response in JSON Format (API's Ver 3)
    'Accept' : 'application/vnd.github.v3+json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
