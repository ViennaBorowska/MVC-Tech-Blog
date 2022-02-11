const router = require("express").Router();
const { Blog } = require("../models");

//GET all blogs
router.get("/", async (req, res) => {
  try {
    const allBlogs = await Blog.findAll();
    const blogObjects = allBlogs.map((blog) => blog.get({ plain: true }));
    res.render("/blogs", { blogs: blogObjects });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//GET single blog
router.get("/:id", async (req, res) => {
  try {
    const singleBlog = (await Blog.findByPk(req.params.id)).get({
      plain: true,
    });
    res.render("/single-blog", { ...singleBlog });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//POST add new blog post
router.post("/", async (req, res) => {
  try {
    const newBlogpost = await Blog.create(req.body);
    res.json(newBlogpost);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//PUT update a blog post
router.put("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const [updatedRows] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//DELETE a blog post
router.delete("/:id", async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy(req.body);
    res.json(deleteBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
