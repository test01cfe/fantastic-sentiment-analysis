

const express = require('express');
const app = express();
const PORT = 3000;

const analysis = require('./text-analysis');

app.get('/', (req, res) => {
    res.status(200).send("<p>Hi Guys!</p>");
});

app.get('/analysis/sentiment', async (req, res) => {
    console.log(await analysis.isPositive(req.query.text));
    res.status(200).send(await analysis.isPositive(req.query.text));
});

app.get('/analysis/phrases', async (req, res) => {
    console.log(await analysis.phrases(req.query.text));
    res.status(200).send(await analysis.phrases(req.query.text));
});

app.get('/analysis/stem', async (req, res) => {
    console.log(await analysis.stem(req.query.word, req.query.language));
    res.status(200).send(await analysis.stem(req.query.word, req.query.language));
});

app.get('/analysis/extract', async (req, res) => {
    console.log(await analysis.extract(req.query.url));
    res.status(200).send(await analysis.extract(req.query.url));
});

app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}.`);
});
