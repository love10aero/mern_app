const express = require('express');
const router = express.Router();

const Subject = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Subject.find();
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Subject.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const subj = new Subject({title, description});
    console.log(subj);
    await subj.save()
    res.json({status: 'Subject Saved'});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newSubj = {title, description};
    await Subject.findByIdAndUpdate(req.params.id, newSubj)
    res.json({status: 'Subject Updated'});
});

router.delete('/:id', async (req, res) => {
    await Subject.findByIdAndRemove(req.params.id)
    res.json({status: 'Subject Deleted'});
})

module.exports = router;