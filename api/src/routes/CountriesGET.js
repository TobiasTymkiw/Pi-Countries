const router = require("express").Router();
const {
  getCountries,
  getCountriesByName,
} = require("../controllers/CountriesGET");

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      const countryByName = await getCountriesByName(name);
      if (countryByName.length) {
        res.status(200).json(countryByName);
      } else {
        res.status(404).json({ error: "Error 404, Country not found" });
      }
    } else {
      const allCountries = await getCountries();
      if (allCountries) {
        res.status(200).json(allCountries);
      } else {
        res.status(404).json({ error: "Error 404, Countries not found" });
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
