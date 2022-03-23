const { Router } = require("express");

const { renderCreateBlog } = require("../../controllers/view/insideController");

const router = Router();

router.get("/create-blog", renderCreateBlog);

module.exports = router;
