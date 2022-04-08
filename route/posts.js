const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

// GET BACK ALL THE POSTS
router.get('/', async (req, res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
})

// SUBMITS A POST

router.post('/', async(req, res)=> {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savePost = await post.save();
    res.send(savePost);
    }catch(err){
        res.json({message: err})
    }
})


// SPECIFIC POST
router.get('/:postId',async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message: err})
    }
})

// Update a post
router.patch('/:postId', async(req, res) => {
    try{
        const updatePost = await Post.updateOne({_id : req.params.postId}, {$set: {title: req.body.title, description: req.body.description}} )
        res.json(updatePost);
    }catch(err){
        res.json({message: err})
    }
})

// Deleted Post
router.delete('/:postId', async (req, res) => {
    try{
        const removePost = await Post.remove({_id : req.params.postId});
        res.json(removePost);
    }catch (err){
        res.json({message: err})
    }
})

module.exports = router;