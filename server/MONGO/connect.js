const mongoose = require('mongoose')

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ds235411.mlab.com:35411/funandfit`


mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false

}).then(()=>{
            console.log(`DB  connected`);
    }).catch(e=> console.log('Error with DB connect'))
