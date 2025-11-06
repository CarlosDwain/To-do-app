const express = require('express');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(express.json());

app.use('/feed', feedRoutes);

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;