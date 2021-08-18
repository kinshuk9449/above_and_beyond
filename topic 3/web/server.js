const express = require('express');
const app = express();
const port = 3000;
const base = `${__dirname}/public`;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${base}/signup.html`);
});

app.get('/signin', (req, res) => {
    res.sendFile(`${base}/signin.html`);
});

app.get('/user', (req, res) => {
    res.sendFile(`${base}/user.html`);
});

app.get('/landing-page', (req, res) => {
    res.sendFile(`${base}/landing-page.html`);
});

app.get('/cars', (req, res) => {
    res.sendFile(`${base}/cars.html`);
});

app.get('/cars-register', (req, res) => {
    res.sendFile(`${base}/car-register.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});