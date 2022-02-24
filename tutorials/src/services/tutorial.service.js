const httpStatus = require("http-status");
const Sequelize = require("sequelize");
const ApiError = require("../utils/ApiError");
const pick = require("../utils/pick");

const { Op } = Sequelize;

const db = require("../config/db");

const create = async (body) => {
  // validate
  if (await db.Tutorial.findOne({ where: { title: body.title } })) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Title already taken");
  }

  const tutorial = new db.Tutorial(body);

  // save tutorial
  await tutorial.save();

  return tutorial;
};

const get = async (params) => {
  const filter = pick(params, ["title", "description"]);
  const options = { where: {} };

  if (filter.title) {
    options.where.title = { [Op.like]: `%${filter.title}%` };
  }
  if (filter.description) {
    options.where.description = { [Op.like]: `%${filter.description}%` };
  }

  options.where.status = { [Op.not]: "DELETED" };

  const tutorials = await db.Tutorial.findAll(options);

  return tutorials;
};

const getById = async (tutorialId) => {
  const tutorial = await db.Tutorial.findOne({
    where: {
      id: tutorialId,
      status: {
        [Op.not]: "DELETED",
      },
    },
  });

  if (!tutorial) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Tutorial not found");
  }

  return tutorial;
};

const updateById = async (id, body) => {
  const tutorial = await getById(id);

  // validate
  if (
    await db.Tutorial.findOne({
      where: {
        title: body.title,
        id: {
          [Op.not]: id,
        },
        status: {
          [Op.not]: "DELETED",
        },
      },
    })
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Title already taken");
  }

  Object.assign(tutorial, body);

  await tutorial.save();

  return tutorial;
};

const deleteById = async (id) => {
  const tutorial = await getById(id);
  tutorial.status = "DELETED";
  await tutorial.save();
};

const deleteAll = async () => {
  await db.Tutorial.update(
    { status: "DELETED" },
    {
      where: {
        status: {
          [Op.not]: "DELETED",
        },
      },
    }
  );
};

module.exports = {
  create,
  get,
  getById,
  updateById,
  deleteById,
  deleteAll,
};
