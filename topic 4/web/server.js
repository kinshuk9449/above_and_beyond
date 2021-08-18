const express = require('express');
const app = express();
const port = 3000;
let request = require('request');
const base = `${__dirname}/public`;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/repo-list', (req, res) => {
    res.sendFile(`${base}/device-list.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${base}/request-repo.html`);
});



app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

