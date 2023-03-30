//  Get Contextual information With UserNAme
const username = 'mojombo';
const accessToken = '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';
// Using Fetch-APi Method
fetch(`https://api.github.com/users/mojombo/events`, {
  headers: {
    'Authorization': `token ${accessToken}`,
    'Accept': 'application/vnd.github.v3+json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
