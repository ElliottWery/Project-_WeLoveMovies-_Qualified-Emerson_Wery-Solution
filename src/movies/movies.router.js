const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsGET = cors({methods: "GET,HEAD,PUT,PATCH,POST,DELETE"});

router
.all(cors());

router


module.exports = router;