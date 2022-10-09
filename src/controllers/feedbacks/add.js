const { Feedback } = require("../../models/feedbacks");

const add = async (req, res) => {
  const result = await Feedback.create(req.body);
  res.status(201).json({
    data: {
      result,
    },
  });
};

module.exports = add;
