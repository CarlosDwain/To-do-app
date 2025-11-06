const mongoose = require('mongoose');
const app = require('./index');
const { DB, PORT } = require('./config');

const startServer = async () => {
  try {
    await mongoose.connect(DB);
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
};

startServer();
