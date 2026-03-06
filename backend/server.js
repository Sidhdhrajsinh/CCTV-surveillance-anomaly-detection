const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/CVMU_final')
    .then(async() => {
        console.log('📦 MongoDB connected');
    })
    .catch(err => console.error('MongoDB connection error:', err));
// middleware
app.use(express.json());

const authRoutes = require("./src/routes/auth.routes");

app.use("/api/auth", authRoutes);

// route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});