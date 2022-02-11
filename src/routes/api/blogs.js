const { Router } = require("express");

const auth = require("../../middleware/auth");

const {
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../../controllers/api/projects");

const router = Router();

router.post("/", auth, createBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
