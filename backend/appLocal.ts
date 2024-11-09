import app from "./app";
const port = 5555;
app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/api`);
  });
