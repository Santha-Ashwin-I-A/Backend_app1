require('dotenv').config();
const express = require('express');


const app = express();

app.get('', (req, res) => {
    res.send('Welcome repo abc');    
});

app.listen(4000, () => {
    console.log(`http://localhost:4000`);
});

