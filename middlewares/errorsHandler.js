function errorsHandler(err, req, res, next) {
  res.status(500).json({
    status: 500,
    error: "Internal Server Error",
    message: err.message,
  });
}

module.exports = errorsHandler;
