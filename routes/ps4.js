//I attribute a lot of my being able to do this pset to Huy so shout out to him for being a real one

let express = require('express');
let router = express.Router();

//.env file allows us to use API sensitive information and hide it as a variable to then use in JS files
//also I didn't know how to use APIs but basically to use APIs you choose a good one that will not make you pay
//for a weather station to use then you get a token - I got a public web token - and you place this in the .env file
//you also have the urls for the API in the file and each time you want to use the API it will send in either the url or
//the url or the url and the token
require('dotenv').config();
const token = process.env.WEATHER_TOKEN;
const url = process.env.WEATHER_URL;
const base = process.env.WEATHER_URL_BASE;

const request = require('request');
const async = require('async');
const fetch = require('node-fetch-commonjs');
//fetch is being very finicky - it worked one night and then the next night it didn't work again
//the best workaround I found was using node-fetch-commonjs where I had to install it even though I
//already had node-fetch installed

//API site:https://www.weatherusa.net/services/weather-api
//base url is the url without query
//url is url with place already put in
//in .gitignore put ignore env
//https://api.weatherusa.net/v1/place?q=Colum
//https://www.weatherusa.net/services/weather-api/docs
// Part b: POST method that uses Promises to manage async http call with 'request' package as HTTP client
//without form show boston weather, with form show whatever weather

//for promise
const options = {
    'method': 'POST',
    'url': 'https://api.weatherusa.net/v1/place?q=02132',
    //'url':'https://api.weatherusa.net/v1/forecast?q=42.36,71.06&maxtime=1h',
    'headers': {
        'Authorization': 'Bearer' + token
    }
};

//Part b: retrieves data from external API
//Use promises to manage async http call
//request package as HTTP client
//wrapped in a promise
router.get('/b', function(req, res, next) {
    return new Promise ((resolve, reject) => {
        request(options, (error, response, body) => {
            if(error) {
                throw new Error(error);
            }
            console.log(JSON.parse(response.body));
            resolve(JSON.parse(response.body));
        });
    })
        .then(response => {
            //res.send(response);
            res.render('ps4', {title: "Pset 4b", data: JSON.stringify(response)});
            //res.render('ps4', {title: "Pset 4"});
    })
});

//https://dmitripavlutin.com/javascript-fetch-async-await/
//Part C: Uses async/await and node-fetch
router.get('/c', async function(req, res, next) {
    let weather = await fetch(url);
    let response = await weather.json();
    //res.send(response);
    res.render('ps4', {title: "Pset 4c", data: JSON.stringify(response)});
});

/*
const  doRequest = async (value) => {
    let returnValueRaw = await fetch(options.url + value)
    let returnValue = await returnValueRaw.json()
    return returnValue;
}

doRequest('123')
.then(returnValue => {
    doRequest(returnValue.args.test + '345')
        .then(returnValue => {
            console.log(`Got: ${returnValue.args.test}`)
        })
    }

 */

//Part D: uses a callback and 'request' package
router.get('/d', function(req, res, next) {
    request(options, function(error, response) {
        if(error) {
            throw new Error(error);
        }
        console.log(JSON.parse(response.body));
        //res.send(JSON.parse(response.body));
        let parsed = JSON.parse(response.body);
        res.render('ps4', {title: "Pset 4d", data: JSON.stringify(parsed)});
    });
});

//Part E: displays result of call on Pug template but also included in each section
router.get('/e', async function(req, res, next) {
    let weather = await fetch(url);
    let response = await weather.json();

    //res.send(response);
    res.render('ps4', {title: "Pset 4e", data: JSON.stringify(response)});
});
//need to get response sent to pug in different format

//Part F: HTML form to send a search string into route

//This is another page just so we have a clean one to start with trying out the form
//also we need a get method to display a page
router.get('/f', function(req,res,next){
    res.render('ps4', {title: 'Form'});
})

//the form is implemented on every page but when you actually type something in the page
//it will bring you to the /form page and hit the API to get what you submitted
router.post('/form', async function(req, res, next) {
    let city = req.body.city;
    let url = base + city;

    let weather = await fetch(url);
    let response = await weather.json();

    res.render('ps4',{title:"Pset 4", data: JSON.stringify(response)});

});

module.exports = router;