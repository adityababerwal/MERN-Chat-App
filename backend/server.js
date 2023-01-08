const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

// start our app
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

// get / route and send a response
app.get("/", (req, res) => {
  res.send("API is up");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
// start server on port 5000
app.listen(PORT, console.log(`Server start on port ${PORT}`));
