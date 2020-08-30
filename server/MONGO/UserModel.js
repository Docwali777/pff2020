const mongoose = require('mongoose');
const {Schema } = mongoose

const DiaryModel = require('./DiaryModel')
const ExerciseModel = require('./ExerciseModel');
const ExerciseType = require('../GrapqQL_Schemas/Types/ExexciseType');
const { LoneSchemaDefinitionRule } = require('graphql');


const UserSchema = Schema({
    email: String, 
    diaries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Diary"
    }], 
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise"
    }]
})



UserSchema.statics.addUserDiary = function({id, content}){
    return DiaryModel.create({content})
                .then(d => {
       return UserModel.findById(id)
                .then(user =>{
                    user.diaries.push(d)
                    user.save()
                return d
               
                })
                })       
}


UserSchema.statics.addExercise_to_User = function({userID, exercise}){
    return this.findById(userID)
                .populate('exercises')
                .exec()
                .then(user =>{
                    return ExerciseModel.findOne({exercise})
                            .then(found =>{
                
                                const index= user.exercises.findIndex(e =>{
                                    return e.exercise === found.exercise
                                })
                                if(index !== -1) throw Error('Exercise has already been added to the list')
                                user.exercises.push(found)
                                user.save()
                                return found
                            })
                })
    

}

const UserModel = mongoose.model('User', UserSchema)

module.exports = mongoose.model('User', UserSchema)