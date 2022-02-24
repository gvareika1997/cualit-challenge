const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const tutorialService = require("../services/tutorial.service");

const createTutorial = catchAsync(async (req, res) => {
  const tutorial = await tutorialService.create(req.body);
  res.status(httpStatus.CREATED).send(tutorial);
});

const getAll = catchAsync(async (req, res) => {
  const tutorials = await tutorialService.get(req.query);
  res.status(httpStatus.OK).send(tutorials);
});

const getById = catchAsync(async (req, res) => {
  const tutorials = await tutorialService.getById(req.params.tutorialId);
  res.status(httpStatus.OK).send(tutorials);
});

const updateById = catchAsync(async (req, res) => {
  const tutorial = await tutorialService.updateById(
    req.params.tutorialId,
    req.body
  );
  res.status(httpStatus.OK).send(tutorial);
});

const deleteById = catchAsync(async (req, res) => {
  await tutorialService.deleteById(req.params.tutorialId);
  res.status(httpStatus.OK).send();
});

const deleteAll = catchAsync(async (req, res) => {
  await tutorialService.deleteAll();
  res.status(httpStatus.OK).send();
});

module.exports = {
  createTutorial,
  getAll,
  getById,
  updateById,
  deleteById,
  deleteAll,
};
