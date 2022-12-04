const mongoose = require('mongoose')


//DB
const dataYelp = 'yelp1DB';

//Mongoose Connection
mongoose.connect(`mongodb://localhost:27017/${dataYelp}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))
