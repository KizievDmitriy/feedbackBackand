const { isValidObjectId } = require("mongoose");
const { BadRequest } = require("http-errors");

const isValidId = (req, res, next) => {
  const { feedbackId } = req.params;
  const isCorrectId = isValidObjectId(feedbackId);
  if (!isCorrectId) {
    throw new BadRequest(`Id=${feedbackId} is not valid`);
  }
  next();
};

module.exports = isValidId;
