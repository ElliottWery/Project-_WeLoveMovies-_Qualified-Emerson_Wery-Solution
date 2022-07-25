const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsGET = cors({methods: "GET"});

router
    .route("/")
    .get(corsGET(), controller.movies)
    

module.exports = router;
