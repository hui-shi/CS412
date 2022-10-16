const express = require('express');
const router = express.Router();

//I didn't know this going into this pset but I think / = ps3 so a lot of times I tried
//to make the route /ps3 and it didn't match the URL I used because to have it be
//http://localhose:3000/ps3 you just need the / I guess

//GET method that returns a fixed string into JSON object and is rendered through Pug
router.get('/', function(req, res, next) {
    res.render('get', {string: 'Hey now'});
});

//POST method that takes post request from Postman and sends to Pug for rendering
//apparently this doesn't actually display in the webpage and to test it you have to use Postman
router.post('/', function(req, res, next) {
    res.render('post', {string: req.body.string, len: req.body.string.length});
});

//GET method that reads input parameter from URL and passes as JSON to Pug for rendering
router.get('/:name', function(req, res, next) {
    res.render('get2', {name: req.params.name});
});



module.exports = router;