const {
    GraphQLObjectType, 
    GraphQLString,
    GraphQLScalarType, 
    GraphQLID
} = require('graphql')

const UserType = require('../Types/UserType')
const DiaryType = require('../Types/DiaryType')

const UserModel = require('../../MONGO/UserModel')
const DiaryModel = require('../../MONGO//DiaryModel.js')
const ExerciseModel = require('../../MONGO/ExerciseModel')
const ExerciseType = require('../Types/ExexciseType')


module.exports = new GraphQLObjectType({
    name: 'Mutations', 
    fields: {
        addUser: {
            type: UserType,  
            args: {email: {type: GraphQLString}},
            resolve(parent, {email}){
                return UserModel.find({email: new RegExp(`^${email}$`, "gi")})
                            .then(user=> {
                              if(user[0]){
                                throw Error('User Already exists')
                              }else {
                                  return UserModel.create({email})
                              }
                            })
            }
        }, 
        // DIARY Mutations=============================
        addUserDiary: {
            type: DiaryType,
            args: {
                id: {type: GraphQLID},
                content: {type: GraphQLString}     
            }, 
            resolve(parent, {id, content}){
              
                if(content.length < 5){
                    throw Error("Please add more information")
                } else {
                    return UserModel.addUserDiary({id, content})
                }

            }

        },
        //Remove Useer Diary
        removeUserDiary: {
            type: DiaryType,
            args: {id: {type: GraphQLID}},
            resolve(parent, {id}){
               return DiaryModel.findByIdAndDelete(id)
            }
            
        }, 
        //Update Document
        updateUserDiary: {
            type: DiaryType, 
            args: {
                id: {type: GraphQLID},
                content: {type: GraphQLString}
            },
            resolve(parent, {id, content}){
                return DiaryModel
                        .findByIdAndUpdate(id, {content}).exec()
            }
        }, 
        // ==================================
        // Add exercise to uusers
        addExercise_to_User: {
            type: ExerciseType, 
            args: {
                exercise: {type: GraphQLString},
                userID: {type: GraphQLID}, 
                // exerciseID: {type: GraphQLID}
        }, 
            resolve(_, {exercise, userID}){
                return UserModel.addExercise_to_User({exercise, userID})
            }

        },

        // ----------------------------------------------
        //Exercises==========================
        addExercise: {
            type: require('../Types/ExexciseType'),
            args: {exercise: {type: GraphQLString}},
            resolve(_, {exercise}){
                return ExerciseModel.create({exercise})
            }
        }, 
        editExercise: {
            type: ExerciseType, 
            args: {
                id: {type: GraphQLID},
                exercise: {type: GraphQLString}
            },

            resolve(parent, {id, exercise}){
                console.log({id, exercise});
                return ExerciseModel.findByIdAndUpdate(id, {exercise})
            }
        },
        deleteExercise:{
            type: ExerciseType,
            args: {id: {type: GraphQLID}},
            resolve(_, {id}){
                return ExerciseModel.findByIdAndRemove(id)
            }
        }
    }
})

