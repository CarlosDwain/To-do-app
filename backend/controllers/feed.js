const Post = require('../models/post');

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        return res.json({ message: 'All posts', posts });
    } catch (err) {
        console.error('getPosts error', err);
        return res.status(500).json({ message: 'Server error' });
        }
};

exports.createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });
        const saved = await newPost.save();
        return res.status(201).json({ message: 'Post created successfully!', post: saved });
    } catch (err) {
        console.error('createPost error', err);
        return res.status(500).json({ message: 'Server error' });
    }
};