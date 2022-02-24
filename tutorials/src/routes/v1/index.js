const express = require("express");
const tutorialRoute = require("./tutorial.route");

const router = express.Router();
const defaultRoutes = [
  {
    path: "/tutorials",
    route: tutorialRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
