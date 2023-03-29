fetch(`https://api.github.com/users`)
.then((Response) => {
  return Response.json();
})
.then((Result) => {
  console.log(Result); 
})
.catch(() => {
  console.error(`SomeThing Went Wrong`);
});
