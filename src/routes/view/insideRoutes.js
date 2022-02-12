const { Router } = require("express");

const {
  renderCreateBlog,
  renderDashboard,
} = require("../../controllers/view/insideController");

const router = Router();

router.get("/create-blog", renderCreateBlog);
router.get("/dashboard", renderDashboard);

module.exports = router;
