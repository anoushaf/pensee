const { check } = require("express-validator");
const connection = require("../dbcon.js");
const express = require("express");
const fs = require("fs");
const router = express.Router();

let query = "";
let queryData = [];
let data = {};

router.get("/admin", (req, res) => {
  // Redirect to admin login if there is no admin logged in.
  if (!req.session.isAdminSignedIn) {
    res.redirect(`/admin/login?r=${req.originalUrl}`);
  } else {
    res.locals.page = {
      admin: true,
      title: "Admin: Welcome"
    };
    res.render("admin/admin-dashboard");
  }
});

router.get("/admin/users", (req, res) => {
  // Redirect to admin login if there is no admin logged in.
  if (!req.session.isAdminSignedIn) {
    res.redirect(`/admin/login?r=${req.originalUrl}`);
  } else {
    res.locals.page = {
      admin: true,
      title: "Admin: Users"
    };

    // Get all students and optins.
    query = `SELECT * FROM emails`

    connection.pool.query(query, [], (error, rows) => {
      data = {
        emails: rows
      };

      res.render("admin/admin-users", data);
    });
  }
});

router.post("/admin/users/:id/delete", (req, res) => {
  // Redirect to admin login if there is no admin logged in.
  if (!req.session.isAdminSignedIn) {
    res.redirect(`/admin/login?r=${req.originalUrl}`);
  } else {
    // Get course by id.
    query = `SELECT * FROM emails WHERE id = ?`;
    queryData = [req.params.id];
    connection.pool.query(query, queryData, (error, rows) => {
      if (error || !rows.length) {
        req.flash("flashError", "email not found");
        res.redirect("/admin/users");
      } else {
        const email = rows[0];
        // Delete course by id.
        query = `DELETE FROM emails WHERE id = ?`;
        queryData = [req.params.id];

        connection.pool.query(query, queryData, () => {
          req.flash("flashError", `${email.email} deleted.`);
          res.redirect("/admin/users");
        });
      }
    });
  }
});

module.exports = router;
