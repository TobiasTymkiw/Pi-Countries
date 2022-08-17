const router = require("express").Router();
const {
  nameAsc,
  nameDesc,
  maxPopulation,
  minPopulation,
  getContinent,
} = require("../controllers/Filters");

router.get("/asc", async (req, res, next) => {
  try {
    let asc = await nameAsc();
    res.status(200).send(asc);
  } catch (error) {
    next(error);
  }
});
router.get("/desc", async (req, res, next) => {
  try {
    let desc = await nameDesc();
    res.status(200).send(desc);
  } catch (error) {
    next(error);
  }
});

router.get("/maxPopulation", async (req, res, next) => {
  try {
    let maxpopulation = await maxPopulation();
    res.status(200).send(maxpopulation);
  } catch (error) {
    next(error);
  }
});

router.get("/minPopulation", async (req, res, next) => {
  try {
    let minpopulation = await minPopulation();
    res.status(200).send(minpopulation);
  } catch (error) {
    next(error);
  }
});

router.get("/continent/:continent", async (req, res, next) => {
  const continent = req.params.continent;
  try {
    let byContinent = await getContinent(continent);
    byContinent.length
      ? res.status(200).send(byContinent)
      : res.status(404).json({ error: "Thats not a continent" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
