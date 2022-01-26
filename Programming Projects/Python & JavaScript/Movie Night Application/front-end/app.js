// Noah Hendricks
// Patrick Kurth
// Student ID: 1900219
// CIS 3368 - 22693 Homework Final Project, Spring 2021
// Movie Night Organizer App


// Javascript file to run the entire web application and frontend program


// load the things we need
var express = require('express');
var app = express();

// required module to make calls to a REST API
const axios = require('axios');

// required module for "morgan"
const morgan = require('morgan');


// set the view engine to ejs
app.set('view engine', 'ejs');

// morgane module
app.use(morgan('short'));

// express module used with JSON format
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// index page (get response)
app.get('/', function(req, res) {

    // Axios fetch method to grab data from the movies api from the backend server
    axios.get('http://127.0.0.1:5000/api/movies')
        .then((response) => {

            // movies is set to equal the response data
            const movies = response.data;

            // Sets a movie array to be a list of parsed movie values
            const movieArray = movies[2];

            // Setting the movie id equal to a parsed out movie array
            const movieId = parseInt(req.query.movieArray);

            // Movie is set to be equal to the finding of a specific movie id
            const movie = movieArray.find(movie => movie.id === movieId);

            // Variable the individual movielist
            var movielist1 = movieArray[0];

            // friend id variable of the movielist
            var friendid1 = movielist1[0]

            // Returns all found data into an array of objects and assigns each to the movie array
            let uniqueKeys = Object.keys(Object.assign({}, ...movieArray));

            // Prints to the terminal
            console.log(uniqueKeys)
            
            // Looping through the array
            for (var key in uniqueKeys) {

                // Prints the identified keys to the terminal
                if (uniqueKeys.hasOwnProperty(key)) {
                    console.log(key + " -> " + uniqueKeys[key]);
                }
            }
            // Printing the values of movies from the movie array into the terminal as objects
            for (const [key, value] of Object.entries(uniqueKeys)) {
                console.log(key , value)
            }
            // Setting a constraing to the unique id's of the movies
            const iterator = uniqueKeys.keys()
            
            // Looping through and printing each unique id into the terminal
            for (const key of iterator) {
                console.log(key)
            }

            // Renders out the movie array and each movie to the index page
            res.render('pages/index', {
            movieArray: movieArray,
            movie: movie
        });
    });
});

// friends page (get response)
app.get('/friends', function(req, res) {

    // Axios fetch method to grab data from the friends api from the backend server
    axios.get('http://127.0.0.1:5000/api/friends')
        .then((response) => {

            // friends is equal to response data
            const friends = response.data;

            // Print the data received from the friends api into the terminal
            console.log(friends)

            // Construction of the friends array
            const friendArray = friends[2];
            const firstFriend = friendArray[0];

            // Parsing out the unique id's of each friend from the friends array
            const friendId = parseInt(req.query.friendArray);

            // friend is set to be equal to the finding of a specific friend id
            const friend = friendArray.find(friend => friend.id === friendId);

            // Printing of the friends array and friend into the terminal
            console.log(friendArray)
            console.log(friend)

            // Renders out the friends array and freind to the friends page
            res.render('pages/friends', {
            friendArray: friendArray,
            friend: friend
        });
    });
});

// movielist by id page (get response)
app.get('/movielist_by_id', function(req, res) {

    // Axios fetch method to grab data from the movies api by id from the backend server
    axios.get('http://127.0.0.1:5000/api/movies')
    .then((response) => {

        // Sends a response to the movielist page of the movie
        res.send('pages/movielist/')

        // prints response of the data into the terminal
        console.log("Hello" + req.query.friend)
    })

});

// friends movies page (get response)
app.get('/friends/movies', function(req, res) {


    // Setting of relative path of URL depending on the response data of the friend and movielist
    res.redirect('/friends/' + req.query.friend)

    // prints response of the data into the terminal
    console.log(req.query.friend)

});

// friend input page (get response)
app.get('/friendinput', function(req, res) {

    // Renders out to the friendinput page
    res.render('pages/friendinput')
})

// friend input post (post response)
app.post('/friendinput', function(req, res,) {

    // Response data for both the input of first and last names
    var firstname = req.body.firstname;
    var lastname = req.body.lastname

    // axioas fetch of the friends api from the backend server
    axios.post('http://127.0.0.1:5000/api/friends',{ 

                // Pulls first name and last name data
                firstname: firstname,
                lastname: lastname
    });

    // Prints the first name and last name data into the terminal
    console.log("First Name: " + req.body.firstname);
    console.log("Last Name: " + req.body.lastname);
});


// friend input page (use response)
app.use('/friendinput' , function (req, res) {

    // Prints request type into the terminal
    console.log("Request Type:", req.method)

});

// friends by id page (get response)
app.get('/friends/:id', function(req, res) {
    
    // Prints the fetched friend along with their id into the terminal
    console.log("Fetching user with ID: "+ req.params.id)
    
    // Sets friend id to requested params.id data
    const friendid = req.params.id

    // axios fetch of the friends api from the backend server to get the friends id's 
    axios.get('http://127.0.0.1:5000/api/friends' + "/" + friendid)
    .then((response) => {


        // Prints data response into the terminal
        console.log(response)
 

        // Renders out the data to the about ejs file
        res.render('pages/about.ejs')  
    });

});



// UNRESPONSIVE CODE
// app.post('/friends/:id/movies', function(req, res) {
    
//     axios.get('http://127.0.0.1:5000/api/friends/' + req.params.id)
//     .then((response) => {



//         console.log(response)

//         res.render('pages/movieinput.ejs')
//     });
    
    
//     res.render('pages/movieinput')

// });

// app.get('/friends/:id/movies', function(req, res) {
    
//     console.log("Fetching user with ID: "+ req.params.id)
    
//     axios.get('http://127.0.0.1:5000/api/friends/' + req.params.id)
//     .then((response) => {

//         console.log(response)

//         res.render('pages/movieinput.ejs')  
//     });

// });




// movie input page (get response)
app.get('/movieinput', function(req, res) {

    // Renders out data into the movie input page
    res.render('pages/movieinput')
})

// friend movie page (post response)
app.post('/friend_movie', function(req, res) {

    // Sets the specified friend id equal to their corresponding movielist to show ownership
    var newFriend = req.body.friendid;

    // Sets variables for movies 1-10 for thhat specified friend
    var newMovie1 = req.body.movie1;
    var newMovie2 = req.body.movie2;
    var newMovie3 = req.body.movie3;
    var newMovie4 = req.body.movie4;
    var newMovie5 = req.body.movie5;
    var newMovie6 = req.body.movie6;
    var newMovie7 = req.body.movie7;
    var newMovie8 = req.body.movie8;
    var newMovie9 = req.body.movie9;
    var newMovie10 = req.body.movie10;
    
    // Prints data of the new friend into the terminal
    console.log(newFriend);

    // axios post method from the movies api from the backend server
    axios.post('http://127.0.0.1:5000/api/movies' , {
        
        // Posting the new friend's id onto the ejs file to be shown on the webpage
        friendid: newFriend,

        // Posting the new movies 1-10 onto the ejs file to be shown on the webpage
        movie1: newMovie1,
        movie2: newMovie2,
        movie3: newMovie3,
        movie4: newMovie4,
        movie5: newMovie5,
        movie6: newMovie6,
        movie7: newMovie7,
        movie8: newMovie8,
        movie9: newMovie9,
        movie10: newMovie10,
    })
    .then(function (response) {

        // Prints response data of the new movielist into the terminal
        console.log(response.data);
    })
})

// delete friend page (get response)
app.get('/deletefriend', function(req, res) {
    
    // axios get method of the friends api from the backend server 
    axios.get('http://127.0.0.1:5000/api/friends')
    .then((response) => {

        // Constraints friends to equal the response data
        const friends = response.data;

        // Prints the friends response data into the terminal
        console.log(friends)

        // Constructs the friends array
        const friendArray = friends[2];
        const firstFriend = friendArray[0];

        // Setting the friend id equal to a parsed out friend array
        const friendId = parseInt(req.query.friendArray);

        // friend is set to be equal to the finding of a specific friend id from the friend array
        const friend = friendArray.find(friend => friend.id === friendId);

        // Prints the friend array and each friend into the terminal
        console.log(friendArray)
        console.log(friend)

        // Renders out the delete friend information to the delete friend webpage
        // deletions of the friend that correlating friend id
        res.render('pages/deletefriend', {
        friendArray: friendArray,
        friend: friend
    });
});
});

// delete friend page (delete response)
app.delete('/delete_friend', function(req, res,) {

    // Sets friend id variable equal to the repsonse body data
    var friendId = req.body.friendid;

    // Prints Hello into the terminal to test the response data
    console.log("HEllo?")

    // axios delete method of the friend id's from the friends api
    axios.delete('http://127.0.0.1:5000/api/friends/'  + friendId , { 
    });
});

// Website Port connection and Info
const port = 4000
app.listen(port, () => {
    console.log(`Front-end app listening at http://localhost:${port}`)
});



///////////////////////////////////////////////////////////////////////////////////////
/*                  REFERENCES
1. https://www.npmjs.com/package/axios
2. https://github.com/axios/axios
3. https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
4. https://www.w3schools.com/html/html_forms.asp
*/
///////////////////////////////////////////////////////////////////////////////////////
