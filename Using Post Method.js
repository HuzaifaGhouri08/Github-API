const accessToken = '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';
fetch('https://api.github.com/user', {
  method: 'POST',
  headers: {
    'Authorization' : `token ${accessToken}`,
    'Accept' : 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
  // converts the JavaScript object to a JSON string.
  body: JSON.stringify({
    bio: 'my new bio',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
