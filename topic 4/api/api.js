let request = require('request');
const express = require('express');

const app = express();
const port = 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

app.get('/api/requested_user', (req, res) => {
  res.send(`Success ${req.query.user}`);
});

app.get('/api/commits', (req, res) => {
  res.send(`Success `);
});

app.post('/api/commit', (req, res) => {

  const use = req.body.use;
  const repo = req.body.repo;
  const options = {
    url: `https://api.github.com/repos/${use}/${repo}/commits`,
    headers: {
      'User-Agent': 'request'
    }
  };
  request(options, function (err, response, message) {
    if (err) {
      console.log('error:', error);
    } else {
      //parse the body to JSON
      const data = JSON.parse(message);
      // for(var i=0; i<data.length; i++)
      // {
      //   const date = data[i].commit.author.date;
      //   const commit_message = data[i].commit.message;
      //   const bod = 
      //   {
      //     date,
      //     commit_message
      //   }
      // app.post(`http://localhost:3002/commits`, bod)
      //         .then(response => {
      //             console.log("done");
      //         })
      //         .catch(error => {
      //             console.error(`Error: ${error}`);
      //         });
      // }
      // res.send(data[0].commit.message);
      console.log(data);
      res.send(data);
      // res.json(data);

    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});