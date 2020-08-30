"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var PORT = 3000;

const Woodbridge = "10.204.1.126"
const Annandale = "192.168.4.28"

var IP_ADDRESS = Woodbridge

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP; //schemas


var schema = require('./GrapqQL_Schemas/rootSchema');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

require('./MONGO/connect');

console.log(IP_ADDRESS);
  app.listen(PORT, IP_ADDRESS, function (e) {
    console.log("Server conneted to {\n http://".concat(IP_ADDRESS, ":3000\n            }"));
  });
