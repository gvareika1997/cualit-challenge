const express = require("express");
const validate = require("../../middlewares/validate");
const validation = require("../../validations/tutorial.validation");
const tutorialController = require("../../controllers/tutorial.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post(
  "/",
  auth(),
  validate(validation.createTutorial),
  tutorialController.createTutorial
);

router.get("/", validate(validation.getTutorials), tutorialController.getAll);

router.delete("/mass_delete", tutorialController.deleteAll);

router
  .route("/:tutorialId")
  .get(tutorialController.getById)
  .put(validate(validation.createTutorial), tutorialController.updateById)
  .delete(tutorialController.deleteById);

module.exports = router;
