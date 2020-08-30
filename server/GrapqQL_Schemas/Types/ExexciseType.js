const graphql = require('graphql')
const {
GraphQLObjectType, 
GraphQLString, 
GraphQLList
} = graphql

const Exercise_Set_Type = require('./Exercise_Set_Type')

const ExerciseType = new GraphQLObjectType({
name: "ExerciseType",
fields: {
    exercise: {type: GraphQLString},
    id: {type: graphql.GraphQLID}

}
})

module.exports = ExerciseType