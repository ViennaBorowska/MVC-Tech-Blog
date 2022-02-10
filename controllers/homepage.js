const router = require("express").Router();
const { Blog } = require("../models");

//GET all blogs
router.get("/", async (req, res) => {
  try {
    const allBlogs = await Blog.findAll();
    const blogObjects = allBlogs.map((blog) => blog.get({ plain: true }));
    res.render("blogs/blogs", { blogs: blogObjects });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
