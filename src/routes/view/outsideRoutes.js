const { Router } = require("express");

const {
  renderSignUp,
  renderLogin,
  renderSingleBlog,
  renderHomePage,
  renderDashboard,
} = require("../../controllers/view/outsideController");

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/login", renderLogin);
router.get("/blogs/:id", renderSingleBlog);
router.get("/", renderHomePage);
router.get("/dashboard", renderDashboard);

module.exports = router;
