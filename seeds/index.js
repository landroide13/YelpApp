require('../database');
const city = require('./city');
const { places, descriptors } = require('./seedHelper');
const Camp = require('../models/campground');
const { default: mongoose } = require('mongoose');

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Camp.deleteMany({});
    for(let i = 0; i < 20; i++){
        const ramdom10 = Math.floor(Math.random() * 100);
        const newCamps = new Camp({
            title: `${sample(descriptors)} ${sample(places)}`,
            location:`${city[ramdom10].city} , ${city[ramdom10].state}`
        })
        await newCamps.save(); 
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
























