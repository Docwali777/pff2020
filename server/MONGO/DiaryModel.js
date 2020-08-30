const mongoose = require('mongoose');
const {Schema } = mongoose;

const DiarySchema = Schema({
    content: String,

}, 
{ timestamps: {createdAt: "created_at"}})
module.exports = mongoose.model('Diary', DiarySchema)