const {
GraphQLObjectType, 
GraphQLString, 
GraphQLID,
GraphQLScalarType,
GraphQLList
} = require('graphql')
const DiaryType = require('./DiaryType')
const UserModel = require('../../MONGO/UserModel')
const ExerciseType = require('./ExexciseType')

const UserType = new GraphQLObjectType({
    name: "UserType", 
    fields: ()=>({
        email: {type: GraphQLString},
        id: {type: GraphQLID}, 
        diaries: {
            type: new GraphQLList(DiaryType),
            resolve({id}, args){
                return UserModel.findById(id)
                        .populate('diaries').exec()
                        .then(({diaries})=> diaries)
                
            }
        }, 
        exercises: {
            type: new GraphQLList(ExerciseType),
            resolve({id}, args){
                return UserModel.findById(id)
                            .populate('exercises')
                            .exec()
                            .then(({exercises})=> exercises)
            }
        }
    })
})

module.exports = UserType