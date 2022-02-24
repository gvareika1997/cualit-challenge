const Joi = require("joi");

const createTutorial = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    videoUrl: Joi.string().uri(),
    status: Joi.string().required().valid("PUBLISHED", "HIDDEN"),
  }),
};

const getTutorials = {
  params: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
  }),
};

module.exports = {
  createTutorial,
  getTutorials,
};
