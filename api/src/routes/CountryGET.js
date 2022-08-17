const router = require("express").Router();
const { Country, Activity } = require("../db");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryByID = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    });
    if (countryByID) {
      res.send(countryByID);
    } else {
      res.status(404).json({error:"Error 404, Country not found"});
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
