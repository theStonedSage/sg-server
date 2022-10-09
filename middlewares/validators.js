const validateType = (req, res, next) => {
  if (
    (req.params.type && req.params.type == "movie") ||
    req.params.type === "series"
  ) {
    next();
  } else {
    res.status(400).send({ error: "No such route exists" });
  }
};

module.exports = { validateType };
