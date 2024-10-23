const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const mysql = require('mysql2');
const mongoose = require('mongoose')
const articlerouter = require("../routes/articles")
const Article = require('./../models/article')
const methodOverrride = require('method-override')


app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '../css')));
app.use('/css', express.static('D:/BloggingWebAppClone/css'));
app.use(express.urlencoded({extended: false}))
app.use(methodOverrride('_method'))

mongoose.connect('mongodb://localhost/luuduc')
app.get('/', async(req, res) => {

    const article = await Article.find().sort({createAt: 'desc'})

    res.render('articles/index', {article:article})
});

app.use('/articles', articlerouter)

// Chạy server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

