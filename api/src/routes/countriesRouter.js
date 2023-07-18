const { Router } = require('express');
const { getCountries, getCountryById } = require("../controllers/countriesControllers");

const countriesRouter = Router();

countriesRouter.get("/", getCountries);

countriesRouter.get("/:id", getCountryById);

module.exports = countriesRouter;