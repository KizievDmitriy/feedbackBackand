const { Feedback } = require("../../models/feedbacks");

const getAll = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.status(200).json({
    data: {
      result: feedbacks,
    },
  });
};

module.exports = getAll;
