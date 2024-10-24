require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const articlerouter = require("../routes/articles")
const Article = require('./../models/article')
const methodOverrride = require('method-override')
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/luuduc'
const NODE_ENV = process.env.NODE_ENV

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '../css')));
app.use('/css', express.static('D:/BloggingWebAppClone/css'));
app.use(express.urlencoded({extended: false}))
app.use(methodOverrride('_method'))

mongoose.connect(MONGODB_URI)
app.get('/', async(req, res) => {

    const article = await Article.find().sort({createAt: 'desc'})

    res.render('articles/index', {article:article})
});

app.use('/articles', articlerouter)

// Chạy server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});

