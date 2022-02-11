const router = require("express").Router();
const blogRoutes = require("./blogRoutes");
const homepage = require("./homepage");

router.use("/", homepage);
router.use("/blogs", blogRoutes);

module.exports = router;
