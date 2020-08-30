const express = require('express')
const app = express()
const PORT = 3000
const { graphqlHTTP }  = require('express-graphql')
var fs = require('fs')
const https = require('https')

//schemas
const schema = require('./GrapqQL_Schemas/rootSchema')

app.use('/graphql', graphqlHTTP({
schema, 
graphiql: true
}))

require('./MONGO/connect')


  // https.createServer({
  //   key: fs.readFileSync('server.key'),
  //   cert: fs.readFileSync('server.cert')
  // })

const Woodbridge = "10.204.1.130"
const Annandale = "192.168.4.28"

var IP_ADDRESS = Annandale 
 

app.listen(PORT, Annandale , (e)=>{
        console.log(
            `Server conneted to {
                http://${Annandale}:${PORT}/graphql
            }`
        );
     })
  
