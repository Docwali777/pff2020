const mongoose = require('mongoose')


const MONGO_URI = "mongodb://wali1:wali123@ds235411.mlab.com:35411/funandfit"


mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false

}).then(()=>{
            console.log(`DB  connected`);
    }).catch(e=> console.log('Error with DB connect'))
