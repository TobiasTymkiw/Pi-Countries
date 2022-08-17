const router = require("express").Router();
const { Activity, Country } = require("../db");

router.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const allCountries = await Country.findAll({ where: { name: name } });
    const getActivities = await Activity.findAll({ where: { name: name } });

    if (getActivities.length) {
      return res.status(200).json(getActivities);
    } else if (allCountries.length) {
      return res.status(200).json(allCountries);
    } else {
      return res
        .status(404)
        .json({ error: "Activities or Countries not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
