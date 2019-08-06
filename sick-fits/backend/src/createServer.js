const { GraphQLServer } = require("graphql-yoga");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const db = require("./db");

// create GraphQL Yoga Server

const createServer = () =>
  new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });

module.exports = createServer;
