const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsGET = cors({methods: "GET"});

router
    .route("/")
    .get(corsGET(), controller.movies)
    .all(methodNotAllowed);

router
    .route("/:is_showing")
    .get(corsGET(), controller.movies)


module.exports = router;