
const graphql = require('graphql')

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLScalarType
    } = graphql;
    
    const DiaryType = new GraphQLObjectType({
        name: "DiaryType", 
        fields: {
            id: {type: GraphQLID},
            content: {type: GraphQLString},
            created_at: {type: GraphQLString}, 
            updatedAt: {type: GraphQLString}
        }
    })
    
    module.exports = DiaryType