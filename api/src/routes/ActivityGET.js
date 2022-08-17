const router = require("express").Router();
const { Activity } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const getActivities = await Activity.findAll();
    if (getActivities.length) {
      return res.status(200).json(getActivities);
    }
    return res.status(404).json({ error: "Activities not found" });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
