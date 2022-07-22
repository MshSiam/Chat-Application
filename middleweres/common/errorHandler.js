const createError = require("http-errors")

// 404 not found handler //
function notFoundHandler(req, res, next) {
  next(404, "Requested page was not found")
}

// default error handler  //
function errorHandler(err, req, res, next) {
  res.locals.title = err
  res.render("error")
}
module.exports = {
  notFoundHandler,
  errorHandler
}
