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
  queryData = [req.body.email];
  if (email != ""){
      connection.pool.query(query,queryData, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");

      });
  }
  res.render('home');

});

module.exports = router;