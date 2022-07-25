const service = require("./movies.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function read(req, res, next) {
  const { movieId } = req.params;
  const movies = await service.read(movieId);
  if (movies) {
    res.json({ data: movies });
  } else {
    return next({ status: 404, message: `Comment cannot be found.` });
  }
}

async function list(req, res, next) {
  const { is_showing } = req.params;
  const activeMovies = await service.list(is_showing);
  if (activeMovies) {
    res.json({ data: activeMovies });
  } else {
    return next({ status: 404, message: `Comment cannot be found.` });
  }
}

async function readReviews(req, res) {
  const { movie } = res.locals;
  const data = await service.readReviews(movie);
  res.json({ data });
}

module.exports = {
  read,
  list,
  readReviews,
};