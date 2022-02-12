const { Router } = require("express");

const {
  renderSignUp,
  renderLogin,
  renderSingleBlog,
  renderHomePage,
} = require("../../controllers/view/outsideController");

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/login", renderLogin);
router.get("/projects/:id", renderSingleBlog);
router.get("/", renderHomePage);

module.exports = router;
