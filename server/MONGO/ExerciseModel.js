const mongoose = require('mongoose')
const { Schema } = mongoose

const ExerciseSchema = new Schema({
    exercise: String

})


module.exports = mongoose.model('Exercise', ExerciseSchema)