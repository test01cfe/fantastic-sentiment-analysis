

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send("<p>Hi Guys!</p>");
});

app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}.`);
});
