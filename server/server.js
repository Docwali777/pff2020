const express = require('express')
const app = express()

const Woodbridge = "10.204.1.130"
const Annandale = "192.168.4.28"

var IP_ADDRESS = Annandale 

//process.env
const PORT = process.env.PORT  || 3000
const IP4 = "142.93.9.196:8080"



const { graphqlHTTP }  = require('express-graphql')
var fs = require('fs')
const https = require('https')

console.log(process.env.PORT);
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


 

app.listen(8080, "142.93.9.196" , (e)=>{
        console.log(
            `Server conneted to {
                http://142.93.9.196:8080/graphql
            }`
        );
     })
  
console.log(process.env.PORT);