const router = require("express").Router();
const { Activity, Country } = require("../db");

router.post("/", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const ActivityDB = await Activity.findAll({ include: Country });
    if (
      ActivityDB &&
      ActivityDB.some((elem) => elem.name.toLowerCase() === name.toLowerCase())
    ) {
      return res.status(404).json({ error: "Activity already created" });
    }
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    const selectedCountries = await Country.findAll({
      where: { name: countries },
    });
    await newActivity.addCountry(selectedCountries);
    if (!newActivity) {
      return res.status(404).json({ error: "We cant create your Activity!" });
    }
    res.status(201).json(newActivity);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
