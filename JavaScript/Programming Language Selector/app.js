//      Noah Hendricks
//      Student ID: 1900219
//      CIS 3368 - 22693 Homework 3, Spring 2021
//      Web front-end that lists information about programming languages

// App Js File

// load the things we need
var express = require('express');
var app = express();

// required module to make calls to a REST API
const axios = require('axios');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use public folder as static
app.use(express.static('public'))

const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded());


// Professor Otto's in class example
app.get('/', function(req, res) {

    // setting each programming language's name within the variable "languages"
    var languages = [
        { name: 'Python'},
        { name: 'C'},
        { name: 'Java'},
        { name: 'C#'},
        { name: 'JavaScript'},
    ];

    // Print languages in terminal to check field values
    console.log(languages)
    // Variable for "tagline" to hold a statement regarding the different coding languages
    var tagline = "All Programming Languages Have Their Very Own Unique Set of Values.";

    // Print tagline in terminal to check field values
    console.log(tagline)
    // Rendering these 2 variables out to the index page
    res.render('pages/index', {
        languages: languages,
        tagline: tagline
    });
});




// Data displayed page 
// on getting the language parameter, an axios request is made to the 
// necessary server to get results for all the languages and then based on the 
// requested language as a parameter value, the necessary field is filtered
// and the html page is re-requested to be rendered with the necessary object set
// to be displayed in tabular format
app.get('/:language', function(req, res) {

    // **LET function** Ref Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    // **REQ.PARMS** Ref Link: - https://www.geeksforgeeks.org/express-js-req-params-property
    // Declares variable (language) within the "get" function and sets it equal the object (program language) selected from the request route 
    let language = req.params.language

    // Checks a boolean, And if true then the value of the language is set to C#
    if (language === 'C sharp')
        language = 'C#'

    // Axios fetch method of the API so I can pull data from that website
    axios
      .get("https://cwrvx8v6xj.execute-api.us-east-2.amazonaws.com/default/apitest")
      .then(response => {

            // **Const** Ref Link: https://www.w3schools.com/js/js_const.asp
            // **Filter** Ref Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            // **Val** Ref Link: https://www.w3schools.com/jquery/html_val.asp
            // Declares the variable (req_lang) which is set to be the 
            // API data is inside of req_lang and is filtered out by it's name value of each programming language..
            // Val sets the the value of the attribute for all matched elements (In this case it is setting val equal to programming language)
            const req_lang = response.data.filter(val => val.name === language)

            // Print req_lang in terminal to check field values
            console.log(req_lang);
            
            // **res.render** Ref Link: https://www.geeksforgeeks.org/express-js-res-render-function
            // Renders record of the selected language by the programming language
            res.render('pages/index', {details: req_lang[0]});
        })

        // **Catch Error** Ref Link: https://stackoverflow.com/questions/50896442/why-is-catcherr-console-errorerr-discouraged
        // **Catch Syntax Description** Ref Link: https://javascript.info/try-catch
        // Catches in error details and explains what happened in the console.
        // if no errors appear, then it is ignored
      .catch(err => console.error(err));
});



// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});


// website port & link
const port = 3000
app.listen(port, () => {
    console.log(`Front-end app listening at http://localhost:${port}`)
})
