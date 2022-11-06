const bodyParser = require("body-parser");
const express = require("express");
const flash = require('connect-flash');
const handlebars = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const app = express()
const port = 3000
const connection = require("./dbcon.js");
const console = require("console");
const crypto = require("crypto");

const hbs = handlebars.create({ helpers: require("./handlebars-helpers") });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Session
app.use(session({
    name: "pensee",
    resave: true,
    saveUninitialized: true,
    secret: "da12<%#3dgnmbn"
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")))
app.use(flash());

app.use(require("./routes/default"));
//app.get('/', (req, res) => {
 //  res.render('home')
//})

//app.post("/", function requestHandler(req,res){
//    const {email} =  req.body;

//    query = `INSERT INTO emails (
//        email) VALUES (?)`; 
//    console.log(email);
//    queryData = [email];
//    connection.pool.query(query,[email]);

//    res.render('home');

//});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})