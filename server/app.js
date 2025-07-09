const express = require('express');
const cors = require('cors');
require('dotenv').config(); 


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON bodies


app.use('/', (req, res) => { 
    res.send('API is working');
});

app.listen(process.env.PORT, '0.0.0.0', async () => {
    console.log(`Server is Running Successfully on Port ${process.env.PORT}`);
});