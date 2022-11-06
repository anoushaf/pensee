const console = require("console");
const express = require("express");
const { check } = require("express-validator");
const connection = require("../dbcon.js");
const router = express.Router();

let query = "";
let queryData = [];
let data = {};

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", function requestHandler(req,res){
    const {email} =  req.body;

    query = `INSERT INTO emails (
        email) VALUES (?)`; 
    console.log(email);
    queryData = [email];
    connection.pool.query(query,email);

    res.render('home');

});

module.exports = router;