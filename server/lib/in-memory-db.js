"use strict";


//Requiring in-memory database; used to make the app less tedius to style the app initially
const db = {
  tweets: require("../data-files/initial-tweets")
}

module.exports = db;

