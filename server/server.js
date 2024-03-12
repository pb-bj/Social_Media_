const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use('/', (req, res) => {
    res.send('API coming soon...');
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})