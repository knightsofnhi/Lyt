var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Band = require('./api/models/bandModel'), //created model loading here
    bodyParser = require('body-parser');
//package path
//app.use(express.static(path.join(_dirname, "public")))
// mongoose instance connection url connection
//router.get("/", (req.res) => {res.sendFile("index.html")})
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lyt_db');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/bandRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('band RESTful API server started on: ' + port);
