const path = require("path");
const plants = require(path.resolve("src/data/plants-data"));
const nextId = require("../utils/nextId");

module.exports = {
    create: [hasName, hasScientificName, hasFamily, create],
    list,
    read: [plantIdExists, read],
    update: [plantIdExists, hasName, hasScientificName, hasFamily, update],
    delete: [plantIdExists, destroy],
  };