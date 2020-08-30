const graphql = require('graphql')
const {
GraphQLObjectType, 
GraphQLString, 
GraphQLInt
} = graphql

const Exercise_Set_Type = new GraphQLObjectType({
name: "Exercise_Set_Type",
fields: {
    set: {type: GraphQLInt},

}
})

module.exports = Exercise_Set_Type