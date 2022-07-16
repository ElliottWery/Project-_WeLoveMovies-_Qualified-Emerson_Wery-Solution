
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary();
    table.string("content");
    table.integer("score");
    table
        .foreign("critic_id")
        .references("critic_id")
        .inTable("reviews")
        .onDelete("cascade");
    table
        .foreign("movie_id")
        .references("movie_id")
        .inTable("reviews")
        .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews");
};
