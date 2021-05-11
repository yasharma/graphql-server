const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require("./db");

(async () => {
  // await db.initialize();

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
      db,
    }),
  });
  server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
  });
  return server;
})();