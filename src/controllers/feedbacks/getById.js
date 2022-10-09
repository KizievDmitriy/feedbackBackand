const { Feedback } = require("../../models/feedbacks");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const { feedbackId } = req.params;
  const result = await Feedback.findById(feedbackId);
  if (!result) {
    throw new NotFound(`Feedback with id=${feedbackId} not found`);
  }
  res.status(200).json({
    data: {
      result,
    },
  });
};

module.exports = getById;
