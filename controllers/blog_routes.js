const router = require('express').Router();
const Blogs = require('../models');

//GET all blogs
router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blogs.findAll();
    res.json(allBlogs);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//GET single blog
router.get('/:id', async (req, res) => {
  try {
    const singleBlog = await Blogs.findByPk(req.params.id);
    res.json(singleBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//POST add new blog post
router.post('/', async (req, res) => {
  try {
    const newBlogpost = await Blogs.create(req.body);
    res.json(newBlogpost);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//PUT update a blog post
router.put('/:id', async (req, res) => {
  try {
    const updateBlogpost = await Blogs.update(req.body);
    res.json(updateBlogpost);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//DELETE a blog post
router.delete('/:id', async (req, res) => {
  try {
    const deleteBlog = await Blogs.destroy(req.body);
    res.json(deleteBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
