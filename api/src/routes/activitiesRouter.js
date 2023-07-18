const { Router } = require('express');
const { getActivities, postActivity } = require("../controllers/activitiesControllers");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);

activitiesRouter.post("/", postActivity);

module.exports = activitiesRouter;