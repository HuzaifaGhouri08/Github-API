const accessToken = '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';
fetch('https://api.github.com/user', {
  // Update the Data Using PATCH Method
  method: 'PATCH',
  headers: {
    'Authorization' : `token ${accessToken}`,
    'Accept' : 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
  // converts the JavaScript object to a JSON string.
  body: JSON.stringify({
    // Update the BIO
    bio: 'Web Developer',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
