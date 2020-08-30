const { 
GraphQLSchema,
GraphQLObjectType,
GraphQLString,
GraphQLList, 
GraphQLID

} = require('graphql')

//Mutations 
const mutation = require('./Mutations')

const UserType = require('./Types/UserType')
const UserModel = require('../MONGO/UserModel')

const ExerciseType = require('./Types/ExexciseType')
const ExerciseModel = require('../MONGO/ExerciseModel')

const RootSchema = new GraphQLObjectType({
    name: 'RootSchema', 
    fields: {
        users: {
            type: new GraphQLList(UserType), 
            resolve(parent, args){
                return UserModel.find({})
            }
        }, 
        user: {
            type: UserType, 
            args: {email: {type: GraphQLString}}, 
            resolve(parent, {email}){
             return UserModel.findOne({email: {$regex: new RegExp(`^${email}$`, "gi")}})
            }
        }, 
        exercises: {
            type: new GraphQLList(ExerciseType), 
            args: {exercise: {type: GraphQLString}}, 
            resolve(parent, args){
                return ExerciseModel.find({})
            }
        }
    }
})

const schema =  new GraphQLSchema({
    query: RootSchema,
    mutation 
})

module.exports = schema
