require('dotenv').config({ path: '.env' });
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers, typeDefs } from './schema/main';
import { PubgAPI } from './endpoints/main';
import cors from 'cors';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ pubgAPI: new PubgAPI() }),
  introspection: process.env.APOLLO_INTROSPECTION === 'true',
  playground: process.env.APOLLO_PLAYGROUND === 'true'
});

server.applyMiddleware({ app, path: '/api/graphql' });

// enable CORS for cross-browser support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});
app.options('*', cors());

// serve static files
app.use(express.static('public'));
app.use('/', express.static(`${__dirname}/build`));

// make sure server is running online
app.get('/', function(req, res) {
  res.send({ status: 'online', owner: process.env.AUTHOR, code: 200 });
});

// verify server is running
app.listen(process.env.GRAPHQL_PORT || 3002, function() {
  console.log(`hello at ${process.env.GRAPHQL_PORT}`);
});
