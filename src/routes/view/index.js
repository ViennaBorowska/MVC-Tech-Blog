const { Router } = require("express");

const outsideRoutes = require("./outsideRoutes");
const insideRoutes = require("./insideRoutes");
const auth = require("../../middleware/auth");

const router = Router();

router.use(outsideRoutes);
router.use(auth, insideRoutes);

module.exports = router;
