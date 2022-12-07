
const express = require('express');
const { getDB } = require('../database/connection');
const router = express.Router();


router.get('/', async(req, res) => {
    const database = await getDB();
    const notes = await database.db().collection('notes').find({}).toArray();
    res.render('home',{ notes })
})

router.get('/notes/create', (req, res) => {
    res.render('notes/create')
})

router.post('/notes/create', async(req, res) => {
    const {title,description} = req.body
    const database = await getDB();

    database.db()
    .collection('notes')
    .insertOne(
    {
        title:title, 
        description:description
    })

    return res.redirect(301,'/')
    
})






module.exports = router;
