fetch('https://api.github.com/users', {
  headers: {
    // My Personal Access Token
    Authorization: 'token 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',
    // telling the server to return the response in JSON format
    Accept: 'application/vnd.github.v3+json',
  },
})
.then((Response) => {
  // in json format
  return Response.json();
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
