'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file
////DONE
// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');

/////////body-parser is similar to json.parse
//////request from server comes back as body and body-parser parse the body to turn into js objects
////const so nothing in my program will change express
const bodyParser = require('body-parser').urlencoded({extended: true});
const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));
// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

////articles is the route
////app.post = set up post route to local host 3000;
////bodyParser take json and parse into something we can read
/////
app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html,
  // and log that form data to the console. We will wire this up soon to actually
  // write a record to our persistence layer!
  console.log(request.body);
  /////////
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`you are hosted on PORT 3000 ${PORT}`);
});
