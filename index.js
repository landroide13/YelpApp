require('./database');
const express = require('express');
const app = express();
const path = require('path');
const method = require('method-override');
const bycript = require('bcrypt');
const session = require('express-session');
const CampSchema = require('./models/campground');


//Sets
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));


//Uses
app.use(express.static(path.join(__dirname, '/public')));
app.use(method('_method'));




app.get('/',(req, res) =>{
    res.render('home');
})

app.get('/campgrounds', async(req, res) =>{
    const camps = await CampSchema.find();
    res.render('campgrounds/index', { camps });
})

app.get('/campgrounds/new', (req, res) =>{
    res.render('campgrounds/new')
})

app.post('/campgrounds', async(req, res) =>{
    const campground = new CampSchema(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
})

app.get('/campgrounds/:id', async(req, res) =>{
    const { id } = req.params;
    const camp = await CampSchema.findById(id)
    res.render('campgrounds/show', { camp });
})

app.get('/campgrounds/:id/edit', async(req, res) =>{
    const { id } = req.params;
    const camp = await CampSchema.findById(id);
    res.render('campgrounds/edit', { camp });
})

app.put('/campgrounds/:id', async(req, res) =>{
    const { id } = req.params;
    const updated = await CampSchema.findByIdAndUpdate(id, {...req.body.campground}, { new: true });
    res.redirect(`/campgrounds/${updated._id}`)
})

app.delete('/campgrounds/:id', async(req, res) =>{
    const { id } = req.params;
    await CampSchema.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})





app.listen(3000, ()=> {
    console.log('App running at 3000');
});
