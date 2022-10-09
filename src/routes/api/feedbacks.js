const express = require("express");
const { ctrlWrapper, validation, isValidId } = require("../../middlewares");
const { feedbacks: ctrl } = require("../../controllers");
const { schemas } = require("../../models/feedbacks");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:feedbackId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.add));

module.exports = router;
