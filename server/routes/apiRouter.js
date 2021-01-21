const express = require("express");
const apiController = require("../controllers/index.js");
const apiRouter = express.Router();


apiRouter.post("/login", apiController.loginUser);
apiRouter.get("/about", apiController.getAbout);

module.exports = apiRouter;