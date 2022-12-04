const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CampSchema = new schema({
    title:{
        type: String,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    location:{
        type: String,
    }
})

module.exports = mongoose.model('Camp', CampSchema);



















