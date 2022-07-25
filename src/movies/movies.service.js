const knex = require("../db/connection");

function read(movieId) { 
  return knex("movies").select("*").where({ movie_id: movieId }).first(); 
}

function list(is_showing) {
  if(is_showing) {
  return knex("movies as m") 
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .distinct("mt.movie_id") 
    .select("m.*") 
    .where({ is_showing: true }); }
  
  return knex("movies").select("*"); 
}


  module.exports = {
    read,
    list,
  };