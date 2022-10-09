const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleValidationErrors } = require("../../middlewares");

const nameRegexp = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailRegexp = /^.+@.+$/;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for feedback"],
      minlength: 3,
      match: nameRegexp,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      match: emailRegexp,
      required: [true, "Set email for feedback"],
      unique: true,
    },
    feedback: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
  },
  { versionKey: false, timestamps: true }
);

feedbackSchema.post("save", handleValidationErrors);

const addSchema = Joi.object({
  name: Joi.string().min(3).pattern(nameRegexp).trim().required(),
  email: Joi.string().email().trim().pattern(emailRegexp).required(),
  feedback: Joi.string().min(10).max(500).required(),
  
});



const schemas = {
  addSchema,
};

const Feedback = model("feedback", feedbackSchema);

module.exports = {
  schemas,
  Feedback,
};
