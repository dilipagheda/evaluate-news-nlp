const axios = require('axios');
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.API_KEY)

const API_KEY = process.env.API_KEY

const app = express()

app.use(cors())

app.use(express.static(path.resolve('../../dist')))

// console.log(path.resolve('../../dist'))
// console.log(__dirname)

app.get('/sentiment',  function (req,res) {
    
    console.log(req.query);

    const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    const params = {
        key: 'c9828b58e373cf98ebf222be70c2dc2b',
        lang: 'en',
        txt: req.query.text
    }
    
    axios({
        url: baseUrl,
        method: 'post',
        params: params
    })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
 

    
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

