const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesGET = require("./CountriesGET");
const CountryGETID = require("./CountryGET");
const ActivityGET = require("./ActivityGET");
const ActivityPOST = require("./ActivityPOST");
const Filters = require("./Filters");
const CountryActivity = require("./ActivityNameGET");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", CountriesGET);
router.use("/countries", CountryGETID);
router.use("/activity", ActivityGET, ActivityPOST);
router.use("/filters", Filters);
router.use("/countryactivity", CountryActivity);
module.exports = router;
