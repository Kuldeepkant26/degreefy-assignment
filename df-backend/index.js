const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
const College = require('./models/college');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

          

// Database connection
async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database");
    } catch (err) {
        console.error("Error in DB connection", err);

    }
}

dbConnection();

// Root Route
app.get('/', (req, res) => {
    res.send('Root route');
});

app.get('/all/college', async (req, res) => {
    const colleges = await College.find();
    res.status(200).json({
        success: true,
        message: 'Fetched all results',
        colleges
    })
});

app.post('/search/college', async (req, res) => {
    const userPrompt = req.body.userPrompt;
 

    try {
        let colleges = await College.find();

        // Filter colleges based on user prompt
        colleges = colleges.filter((college) => {
            return (
                college['Institute Name'].toLowerCase().includes(userPrompt.toLowerCase()) ||
                college['Institute City'].toLowerCase().includes(userPrompt.toLowerCase()) ||
                college['Institute State'].toLowerCase().includes(userPrompt.toLowerCase()) ||
                college['Course Name'].toLowerCase().includes(userPrompt.toLowerCase()) ||
                college['Course Stream'].toLowerCase().includes(userPrompt.toLowerCase()) ||
                college['Level'].toLowerCase().includes(userPrompt.toLowerCase())
            );
        });

        // Send the filtered colleges as a response
        res.status(200).json({
            success: true,
            message: 'Data fetched',
            colleges

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Insert Data Route
app.get('/insertdata', async (req, res) => {
    try {
        await College.insertMany(

        );
        res.send('Data inserted successfully');
    } catch (error) {
        console.error("Error inserting data", error);
        res.status(500).send('Error inserting data');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
